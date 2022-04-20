import { DbDeleteUserRepository } from './../interfaces/db-delete-user-repository';
import { DeleteUser } from './../../domain/useCases/delete-user';

export class DbDeleteUser implements DeleteUser {

  constructor(private dbDeleteUserRepository: DbDeleteUserRepository) {}

  async delete(id: string): Promise<boolean> {
    return await this.dbDeleteUserRepository.delete(id);
  }
}