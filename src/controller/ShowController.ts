import { Request, Response } from "express";
import ShowBusiness from "../business/ShowBusiness/ShowBusiness";
import SQLShowDatabase from "../data/SQLShowDatabase";
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
                .send(200)
                .send(getShowId)
                .end()

        } catch (err: CustomError | any) {
            res
                .status(err.code || 500)
                .send((err.message || "Internal Error",
                    err.tips || "Something went wrong"))
        }
    }

}


const userDatabase = new SQLShowDatabase()
const idGenerator = new IdGenerator()
const authenticator = new Authenticator()
const showBusiness = new ShowBusiness(userDatabase, authenticator, idGenerator)
const showController = new ShowController(showBusiness)

export default showController