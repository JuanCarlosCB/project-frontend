export class History{
  id:number;
  message:string;
  publicationDate: Date;

  constructor(message:string){
    this.message = message;
    this.publicationDate = new Date();

  }
}
