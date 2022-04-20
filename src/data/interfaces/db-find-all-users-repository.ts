import { UserModel } from './../../domain/model/user';

export interface DbFindAllUsersRepository {
  findAll(): Promise<UserModel[]>;
}