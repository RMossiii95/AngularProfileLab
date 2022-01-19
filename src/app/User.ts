export class User{
    name: string;
    contactInfo: string;
    biography: string;
    constructor(name:string,contactInfo:string,biography:string){
        this.name = name;
        this.contactInfo = contactInfo;
        this.biography = biography;
    }
}