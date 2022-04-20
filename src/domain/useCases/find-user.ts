import { UserModel } from './../model/user';

export interface FindUser {
  findOne(id: string): Promise<UserModel>;
}