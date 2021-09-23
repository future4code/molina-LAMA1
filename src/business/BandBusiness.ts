import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { BandInputDTO } from "../model/Band";
import { User, UserRole } from "../model/User";
export class BandBusiness{
    constructor(
        private bandDataBase:BandDataBase,
        private idGenrator: IdGenerator,
        private autheticator: Authenticator
    ){}
    async registerBand(input:BandInputDTO, token:string){
        const tokenData = this.autheticator.getData(token) 

        if(tokenData.role !==UserRole.ADMIN){
            throw new Error("token incorreto")
        }
    }
}