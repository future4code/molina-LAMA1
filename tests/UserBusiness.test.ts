import { UserBusiness } from "../src/business/UserBusiness"
import { IdGenerator } from "../src/services/IdGenerator"
import { HashGeneratorMock } from "./mocks/hashGenerator"
import { IdGeneratorMock } from "./mocks/idGenerator"
import { UserDataBaseMock } from "./mocks/userDataBase"


describe("cadastro",()=>{
    test("deve retornar erro quando email estiver vazio",async ()=>{
        const userDataMock = new UserDataBaseMock() 
        const id = new IdGeneratorMock().generate() //1
        const hashGeneratorMock = new HashGeneratorMock()
        const password = hashGeneratorMock.hash("ab")
        
        try{
            const userBusiness = new UserBusiness(userDataMock)
            await userBusiness.createUser({name:"matheus",email:"",password:"123456", role:"ADMIN"} )
        }catch(error){
            expect(error.message).toEqual("Email vazio")
        }
    })
    //banco

    test("criar usuario",async ()=>{
        const userDataMock = new UserDataBaseMock()
        const id = new IdGeneratorMock().generate() //1
        const hashGeneratorMock = new HashGeneratorMock()
        const password = hashGeneratorMock.hash("ab")
        const userBusiness = new UserBusiness(userDataMock)
        const result:any =await userBusiness.createUser({name:"matheus",email:"mateheu@jdjdjd",password:"123456", role:"ADMIN"} )
        
            expect(result)
       
    })
})