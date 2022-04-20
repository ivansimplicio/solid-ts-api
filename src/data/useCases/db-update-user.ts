import { UserModel } from './../../domain/model/user';
import { DbUpdateUserRepository } from './../interfaces/db-update-user-repository';
import { UpdateUser, UpdateUserDTO } from './../../domain/useCases/update-user';

export class DbUpdateUser implements UpdateUser {

  constructor(private dbUpdateUserRepository: DbUpdateUserRepository){}

  async update(updateUserDTO: UpdateUserDTO): Promise<UserModel> {
    return await this.dbUpdateUserRepository.update(updateUserDTO);
  }
}