import { Moment } from 'moment';
import { Genre, Specie, Status } from '../constants/enum.constants';

export interface IPet {
  id?: string;
  birthday?: Moment;
  castrated?: Boolean;
  cellphone: string;
  description?: string;
  enteredDate?: Moment;
  genre: Genre;
  image?: string;
  imagePath?: string;
  name: string;
  status: Status;
  specie: Specie;
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
    public genre: Genre | null = null,
    public image?: string,
    public imagePath?: string,
    public name: string = '',
    public status: Status = Status.Adoption,
    public specie: Specie = Specie.Dog,
    public vaccinated?: string,
    public weight?: string,
    public whatsappLink?: string,
    public createdDate?: Moment
  ) { }
}