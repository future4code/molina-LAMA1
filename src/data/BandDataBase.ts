import { Band } from "../model/Band";
import { BaseDatabase } from "./BaseDatabase";


export class BandDataBase extends BaseDatabase{
    
  private static TABLE_NAME = "s21_projeto_bands";
  public async registerBand(
    band:Band
  ): Promise<void>{
      try{
        await this.getConnection()
        .insert({
            id:band.id,
            name:band.name,
            music_genre:band.musicGenre,
            responsible:band.responsible
        })
        .into(BandDataBase.TABLE_NAME)
      }catch(error){
        throw new Error(error.sqlMessage || error.message);
      }
  }
  public async getBandById(id:string){
      
        const result = await this.getConnection()
          .select()
          .from(BandDataBase.TABLE_NAME)
          .where({id:id})
          return result
  }
}