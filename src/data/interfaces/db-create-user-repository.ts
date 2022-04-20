import { CreateUserDTO } from './../../domain/useCases/create-user';
import { UserModel } from './../../domain/model/user';

export interface DbCreateUserRepository {
  save(user: CreateUserDTO): Promise<UserModel>;
}