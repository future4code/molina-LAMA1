
export  class Band {
    constructor(
        private id:string,
        private name:string,
        private musicGenre:string,
        private resposible:string
    ){}

    public getId():string{
        return this.id
    }
    public getName():string{
        return this.name
    }
    public getMusicGenre():string{
        return this.musicGenre
    }
    public getResponsible():string{
        return this.resposible
    }
    public setName(name:string){
        this.name=name
    }
    public setMusicGenre(musicGenre:string){
        this.musicGenre=musicGenre
    }
    public setresponsible(resposible:string){
        this.resposible=resposible
    }
}