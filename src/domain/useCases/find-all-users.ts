import { UserModel } from "../model/user";

export interface FindAllUsers {
  findAll(): Promise<UserModel[]>;
}