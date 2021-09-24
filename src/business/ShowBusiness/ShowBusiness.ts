import CustomError from "../../error/CustomError"
import { createShowDTO } from "../../model/Show"
import { Authenticator, AuthenticationData } from "../../services/Authenticator"
import { HashManager } from "../../services/HashManager"
import { IdGenerator } from "../../services/IdGenerator"
import ShowRepository from "./ShowRepository"

export default class ShowBusiness {

    constructor(
        private userDatabase: ShowRepository,
        private authenticator: Authenticator,
        private idGenerator: IdGenerator
    ) { }

    // i n c l u i r   a q u i   f u n ç õ e s   d e   v a l i d a ç ã o


    public async createShow(
        createShowDTO: createShowDTO,
        token: string
    ) {
        try {

            if (!token) {
                throw new CustomError(
                    "Missing Token",
                    406,
                    "Verify if token was send on request"
                );
            }

            const isValidToken: any = new Authenticator().getData(token)

            // i n c l u i r   a q u i   e t a p a   d e   v a l i d a ç õ e s
            if (isValidToken.role !== "ADMIN") {
                throw new CustomError(
                    "Invalid Token",
                    406,
                    "Credential doesn't have enough permission to create a Show"
                );

            }

            const showId = this.idGenerator.generate()

            await this.userDatabase.createShow({
                showId: showId,
                bandId: createShowDTO.bandId,
                weekDay: createShowDTO.weekDay,
                startTime: createShowDTO.startTime,
                endTime: createShowDTO.endTime
            })

            return { showId: showId }

        } catch (err) {

            throw new CustomError(
                err.message || "Internal Error",
                err.code || 500,
                { error: err.tips || "Try again" })

        }
    }
}