import { UserModel } from './../../domain/model/user';
import { DbFindUserRepository } from './../interfaces/db-find-user-repository';
import { FindUser } from './../../domain/useCases/find-user';

export class DbFindUser implements FindUser {

  constructor(private dbFindUserRepository: DbFindUserRepository) {}

  async findOne(id: string): Promise<UserModel> {
    return await this.dbFindUserRepository.findOne(id);
  }
}