import { Moment } from "moment";

export interface IUser {
  id?: string;
  email: string;
  cellphone?: string;
  name: string;
  password?: string;
  profile?: Profile;
  createdDate?: Moment;
}

export class User implements IUser {
  constructor(
    public id?: string,
    public email: string = '',
    public cellphone?: string,
    public name: string = '',
    public password?: string,
    public profile?: Profile,
    public createdDate?: Moment
  ) { }
}

enum Profile {
  Admin = 'ADMIN',
  RefugeManager = 'REFUGE_MANAGER'
}
