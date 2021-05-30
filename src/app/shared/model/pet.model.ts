import { Moment } from 'moment';
import { Genre, Specie, Status } from '../constants/enum.constants';
import { DATE_FORMAT, YEAR_DEFAULT_VALUE, MONTH_DEFAULT_VALUE } from 'src/app/shared/constants/date-format.constants';
import * as moment from 'moment';

export interface IPet {
  id?: string;
  age?: string;
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
    public age: string = '',
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
  ) {
    this.id = id;
    this.birthday = birthday;
    this.castrated = castrated;
    this.cellphone = cellphone;
    this.description = description;
    this.enteredDate = enteredDate;
    this.genre = genre;
    this.image = image;
    this.imagePath = imagePath;
    this.name = name;
    this.status = status;
    this.specie = specie;
    this.vaccinated = vaccinated;
    this.weight = weight;
    this.whatsappLink = whatsappLink;
    this.createdDate = createdDate;
    this.age = this.setAge(birthday);
  }

  setAge(birthday) {
    let petAge: string = '';
    if (birthday) {
      const birthdayDate = moment(birthday.toDate(), DATE_FORMAT);
      const currentDate: moment.Moment = moment();

      const yearsDifference = currentDate.diff(birthdayDate, 'year');
      const monthsDifference = currentDate.diff(birthdayDate, 'months');

      if (yearsDifference < YEAR_DEFAULT_VALUE) {
        petAge = monthsDifference == MONTH_DEFAULT_VALUE ? '1 mes' : monthsDifference + ' meses';
      } else {
        petAge = yearsDifference == YEAR_DEFAULT_VALUE ? '1 año' : yearsDifference + ' años';
      }
      console.log('petAge', petAge);
    }
    return petAge;
  }
}