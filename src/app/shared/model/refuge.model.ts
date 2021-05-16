import { Moment } from 'moment';

export interface IRefuge {
  id?: string;
  adoptedAnimals?: number;
  animalsForAdoption?: number;
  cellphone?: string;
  description?: string;
  facebookUrl?: string;
  images?: string[];
  logoPath?: string;
  isActive?: boolean;
  name?: string;
  order?: number;
  urgentQuantity?: number;
  whatsappLink?: string;
  createdDate?: Moment;
}

export class Refuge implements IRefuge {
  constructor(
    public id?: string,
    public adoptedAnimals?: number,
    public animalsForAdoption?: number,
    public cellphone?: string,
    public description?: string,
    public facebookUrl?: string,
    public images?: string[],
    public logoPath?: string,
    public isActive?: boolean,
    public name?: string,
    public order?: number,
    public urgentQuantity?: number,
    public whatsappLink?: string,
    public createdDate?: Moment
  ) {}
}
