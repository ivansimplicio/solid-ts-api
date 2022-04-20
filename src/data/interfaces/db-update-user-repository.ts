import { UserModel } from './../../domain/model/user';
import { UpdateUserDTO } from './../../domain/useCases/update-user';

export interface DbUpdateUserRepository {
  update(user: UpdateUserDTO): Promise<UserModel>;
}