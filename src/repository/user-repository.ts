import { User } from './../models/user';
import { DbDeleteUserRepository } from './../data/interfaces/db-delete-user-repository';
import { DbFindUserRepository } from './../data/interfaces/db-find-user-repository';
import { DbFindAllUsersRepository } from './../data/interfaces/db-find-all-users-repository';
import { DbCreateUserRepository } from './../data/interfaces/db-create-user-repository';
import { DbUpdateUserRepository } from '../data/interfaces/db-update-user-repository';
import { getRepository } from 'typeorm';
import { UpdateUserDTO } from '../domain/useCases/update-user';
import { CreateUserDTO } from 'src/domain/useCases/create-user';

export class DbMySqlUserRepository
  implements DbCreateUserRepository,
  DbFindAllUsersRepository,
  DbFindUserRepository,
  DbDeleteUserRepository,
  DbUpdateUserRepository {

  async save(user: CreateUserDTO): Promise<User> {
    const repository = getRepository(User);
    const findUserByEmail = await this.findByEmail(user.email);
    const findUserByCPF = await this.findByCPF(user.cpf);
    if(findUserByEmail){
      throw new Error("Email is already registered.");
    }
    if(findUserByCPF){
      throw new Error("CPF is already registered.");
    }
    return await repository.save(user);
  }

  async findAll(): Promise<User[]> {
    const repository = getRepository(User);
    return await repository.find();
  }

  async findOne(id: string): Promise<User> {
    const repository = getRepository(User);
    return await repository.findOne(id);
  }

  async findByEmail(email: string): Promise<User> {
    const repository = getRepository(User);
    return await repository.findOne({email});
  }

  async findByCPF(cpf: string): Promise<User> {
    const repository = getRepository(User);
    return await repository.findOne({cpf});
  }

  async delete(id: string): Promise<boolean> {
    const repository = getRepository(User);
    const user = await repository.findOne(id);
    if(user){
      await repository.delete(id);
      return true;
    }
    throw new Error("User not found.");
  }

  async update(updateUser: UpdateUserDTO): Promise<User> {
    const repository = getRepository(User);
    const user = await repository.findOne(updateUser.id);
    const findUserByEmail = await this.findByEmail(updateUser.email);
    const findUserByCPF = await this.findByCPF(updateUser.cpf);
    if(user){
      if(findUserByEmail && findUserByEmail.id !== user.id){
        throw new Error("Email is already registered.");
      }
      if(findUserByCPF && findUserByCPF.id !== user.id){
        throw new Error("CPF is already registered.");
      }
      const { id, ...data } = updateUser;
      await repository.update(id, data); 
      return repository.create({...user, ...data});
    }
    return null;
  }
}