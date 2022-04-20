import { UserModel } from './../../domain/model/user';

export interface DbFindUserRepository {
  findOne(id: string): Promise<UserModel>;
}