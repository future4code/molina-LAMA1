import { Request, Response } from "express";
import ShowBusiness from "../business/ShowBusiness/ShowBusiness";
import SQLShowDatabase from "../data/ShowDatabase/SQLShowDatabase";
import CustomError from "../error/CustomError";
import { createShowDTO } from "../model/Show";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class ShowController {

    constructor(
        private showBusiness: ShowBusiness
    ) { }


    public async createShow(req: Request, res: Response) {

        try {

            const getShowId = await showBusiness
                .createShow(
                    req.body as createShowDTO,
                    req.headers.authorization as string
                )

            return res
                .status(200)
                .send(getShowId)
                .end()

        } catch (err: any) {
            res
                .status(err.code || 500)
                .send({
                    message: err.message || "Internal Error",
                    error: err.tips || "Something went wrong"
                })
                .end()
        }
    }

    public async getShowByWeekDay(req: Request, res: Response) {

        try {

            const showsList = await showBusiness
                .getShowByWeekDay(
                    req.params.weekDay as string
                )

            !showsList ?
                res
                    .status(204)
                    .end()
                : res
                    .status(200)
                    .send(showsList)
                    .end()

        } catch (err: any) {

            res
                .status(err.code || 500)
                .send({
                    message: err.message || "Internal Error",
                    error: err.tips || "Something went wrong"
                })
                .end()
        }
    }

}


const userDatabase = new SQLShowDatabase()
const idGenerator = new IdGenerator()
const authenticator = new Authenticator()
const showBusiness = new ShowBusiness(userDatabase, authenticator, idGenerator)
const showController = new ShowController(showBusiness)

export default showController