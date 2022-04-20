import { UserModel } from './../../domain/model/user';
import { DbFindAllUsersRepository } from './../interfaces/db-find-all-users-repository';
import { FindAllUsers } from './../../domain/useCases/find-all-users';

export class DbFindAllUsers implements FindAllUsers{

  constructor(private dbFindAllUsersRepository: DbFindAllUsersRepository){}

  async findAll(): Promise<UserModel[]> {
    return await this.dbFindAllUsersRepository.findAll();
  }
}