import { UserModel } from "../model/user";

export type UpdateUserDTO = {
  id: string,
  name: string;
  email: string;
  cpf: string;
  password: string;
  birthDate: Date;
}

export interface UpdateUser {
  update(updateUserDTO: UpdateUserDTO): Promise<UserModel>;
}