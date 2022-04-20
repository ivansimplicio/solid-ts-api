import { UserModel } from './../model/user';

export type CreateUserDTO = {
  name: string,
  email: string,
  cpf: string,
  password: string,
  birthDate: Date,
}

export interface CreateUser {
  create(createUserDTO: CreateUserDTO): Promise<UserModel>;
}