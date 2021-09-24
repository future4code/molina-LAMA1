import { createShowDTO } from '../../model/Show'

export default interface ShowRepository {
    createShow(createShowDTO: createShowDTO): Promise<void>
    getShowByDate(weelDay: string): Promise<any>
}