import { Moment } from 'moment';

export interface IPet {
  id?: string;
  birthday?: Moment;
  description?: string;
  genre?: string;
  image?: string;
  imagePath?: string;
  name?: string;
}

export class Pet implements IPet {
  constructor(
    public id?: string,
    public birthday?: Moment,
    public description?: string,
    public genre?: string,
    public image?: string,
    public imagePath?: string,
    public name?: string
  ) { }
}
