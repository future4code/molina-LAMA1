import { UserDatabase } from "../../src/data/UserDatabase";


export class UserDataBaseMock extends UserDatabase {
    public createUser:(id: string,
        email: string,
        name: string,
        password: string,
        role: string)=>Promise<void> = jest.fn()

        // public getUserByEmail: (email: string) => Promise< void> = jest.fn(async (email: string): Promise<void> => {
        //     return new User("1", "Nome", email, "123123", USER_ROLES.ADMIN);
        //   })
}