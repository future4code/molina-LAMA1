import { BandDataBase } from "../../src/data/BandDataBase"
import { Band } from "../../src/model/Band";

export class BandDataBaseMock extends BandDataBase{
    public registerBand:(band:Band)=>Promise<void> = jest.fn()


}
