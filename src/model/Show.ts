export interface createShowDTO {
    weekDay: string,
    startTime: number,
    endTime: number,
    bandId: string,
    showId?: string
}

export type showsAgenda = {
    name: string,
    musicGenre: string,
    startTime: number,
    endTime: number
  }