import { Moment } from 'moment';
import { IRefuge } from './refuge.model';

export interface IPet {
  id?: string;
  birthday?: Moment;
  castrated?: Boolean;
  cellphone: string;
  description?: string;
  enteredDate?: Moment;
  genre: string;
  image?: string;
  imagePath?: string;
  name: string;
  status: Status;
  type: Type;
  vaccinated?: string;
  weight?: string;
  whatsappLink?: string;
  refugeName?: string;
  createdDate?: Moment;
}

export class Pet implements IPet {
  constructor(
    public id?: string,
    public birthday?: Moment,
    public castrated?: Boolean,
    public cellphone: string = '',
    public description?: string,
    public enteredDate?: Moment,
    public genre: string = '',
    public image?: string,
    public imagePath?: string,
    public name: string = '',
    public status: Status = Status.Adoption,
    public type: Type = Type.Dog,
    public vaccinated?: string,
    public weight?: string,
    public whatsappLink?: string,
    public createdDate?: Moment
  ) { }
}

enum Type {
  Dog = 'DOG',
  Cat = 'CAT'
}

enum Status {
  Adoption = 'ADOPTION',
  Urgent = 'URGENT',
  Adopted = 'ADOPTED'
}