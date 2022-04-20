import { UserModel } from './../../domain/model/user';
import { DbCreateUserRepository } from './../interfaces/db-create-user-repository';
import { CreateUser, CreateUserDTO } from './../../domain/useCases/create-user';

export class DbCreateUser implements CreateUser{

  constructor(private dbCreateUserRepository: DbCreateUserRepository){};

  async create(user: CreateUserDTO): Promise<UserModel>{
    return await this.dbCreateUserRepository.save(user);
  }
}