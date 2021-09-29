import { createShowDTO } from '../../model/Show'

export default interface ShowRepository {
    createShow(createShowDTO: createShowDTO): Promise<void>
    getShowByWeekDay(weekDay: string): Promise<any>
}