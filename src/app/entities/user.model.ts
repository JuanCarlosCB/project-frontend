import { History } from './history.model';

export class User {
  id:number;
  name:string;
  surname:string;
  age:number;
  city:string;
  image:string;
  stories: History[];
}
