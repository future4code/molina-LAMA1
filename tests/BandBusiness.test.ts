import { tokenToString } from "typescript"
import { BandBusiness } from "../src/business/BandBusiness"
import { BandController } from "../src/controller/BandController"
import { BandDataBaseMock } from "./mocks/bandDataBase"
import { IdGeneratorMock } from "./mocks/idGenerator"

describe("cadastrr banda",()=>{

    test("criar usuario",async ()=>{
        const bandDataBaseMock = new BandDataBaseMock()
        const id = new IdGeneratorMock().generate() //1
        const bandBusiness = new BandBusiness(bandDataBaseMock)
        const band = {
            id:id,
            name:"matheus",
           musicGenre:"samba",
           responsible:"djdjdj"
        }
        const result = await bandBusiness.registerBand(band.name,band.musicGenre,band.responsible,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAzNjI5ZTQwLWIxZTctNDUzMi1hMDk5LTUxOTQzNWNiMzlkYSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYzMjU5NTIwNCwiZXhwIjoxNjMyNTk1ODA0fQ.-2kLk-L0ECanA4A-aaZhky6e2MvMEAy2GdMd7UIxFz4")
        console.log("business ",result)
            expect(result).toEqual("Band adicionada!")
       
    })

    test("criar usuario",async ()=>{
        const bandDataBaseMock = new BandDataBaseMock()
        const id = new IdGeneratorMock().generate() //1
        const bandBusiness = new BandBusiness(bandDataBaseMock)
        const band = {
            id:id,
            name:"matheus",
           musicGenre:"",
           responsible:"djdjdj"
        }
        try{
           await bandBusiness.registerBand(band.name,band.musicGenre,band.responsible,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzFlZTNlLTI2ODAtNDJhYy1iM2M4LWMxY2JiM2NjZDg0NSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYzMjU5ODU0NCwiZXhwIjoxNjMyNjM0NTQ0fQ.v_RliOgVRwEQFBxfSi40xSa_ZWhJ_zWtiNo07g39z-s")
        }
       catch(error){
           expect(error.message).toEqual(" Parâmetros faltando ")
       }
       
    })
})