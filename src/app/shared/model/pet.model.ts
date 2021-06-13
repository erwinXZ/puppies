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
    public imagePath?: string,
    public name: string = '',
    public status: Status = Status.Adoption,
    public refugeName?: string,
    public castrated?: Boolean,
    public cellphone: string = '',
    public description?: string,
    public enteredDate?: Moment,
    public genre: Genre | null = null,
    public image?: string,
    public specie: Specie = Specie.Dog,
    public vaccinated?: string,
    public weight?: string,
    public whatsappLink?: string,
    public createdDate?: Moment
  ) {
    this.id = id;
    this.birthday = birthday;
    this.imagePath = imagePath;
    this.name = name;
    this.status = status;
    this.refugeName = refugeName;
    this.castrated = castrated;
    this.cellphone = cellphone;
    this.description = description;
    this.enteredDate = enteredDate;
    this.genre = genre;
    this.image = image;
    this.specie = specie;
    this.vaccinated = vaccinated;
    this.weight = weight;
    this.whatsappLink = whatsappLink;
    this.createdDate = createdDate;
  }
}