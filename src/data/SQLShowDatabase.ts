import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";
import { createShowDTO } from "../model/Show";
import ShowRepository from '../business/ShowBusiness/ShowRepository'

export default class SQLShowDatabase extends BaseDatabase implements ShowRepository {

  private static TABLE_NAME = "s21_projeto_shows";

  public async createShow(
    createShowDTO: createShowDTO
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id: createShowDTO.showId,
          week_day: createShowDTO.weekDay,
          start_time: createShowDTO.startTime,
          end_time: createShowDTO.endTime,
          band_id: createShowDTO.bandId,
        })
        .into(SQLShowDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  //d e v e   s e r   i m p l e m e n t a d o   p o s t e r i o r m e n t e:
  public async getShowByDate(weekDay: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(SQLShowDatabase.TABLE_NAME)
      .where({ week_day: weekDay })
      .orderBy("start_time", "asc");

    return result[0];
  }

}
