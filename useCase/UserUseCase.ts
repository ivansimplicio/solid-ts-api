import { RequiredFieldValidator } from './../src/validation/required-field-validator';
import { DateValidator } from './../src/validation/date-validator';
import { CpfValidator } from './../src/validation/cpf-validator';
import { EmailValidator } from './../src/validation/email-validator';
import { DbUpdateUser } from './../src/data/useCases/db-update-user';
import { UpdateUserController } from './../src/presentation/controllers/update-user-controller';
import { DbDeleteUser } from './../src/data/useCases/db-delete-user';
import { DeleteUserController } from './../src/presentation/controllers/delete-user-controller';
import { DbFindUser } from './../src/data/useCases/db-find-user';
import { FindUserController } from './../src/presentation/controllers/find-user-controller';
import { DbFindAllUsers } from './../src/data/useCases/db-find-all-users';
import { FindAllUsersController } from './../src/presentation/controllers/find-all-users-controller';
import { ValidationComposite } from './../src/validation/validation-composite';
import { Validation } from './../src/presentation/interfaces/validation';
import { DbMySqlUserRepository } from './../src/repository/user-repository';
import { DbCreateUser } from './../src/data/useCases/db-create-user';
import { CreateUserController } from './../src/presentation/controllers/create-user-controller';
import { Request, Response } from 'express';

export class UserUseCase {
  static create = async (request: Request, response: Response) => {
    const userRepository = new DbMySqlUserRepository();
    const dbCreateUser = new DbCreateUser(userRepository);
    const controller = new CreateUserController(dbCreateUser, new ValidationComposite(this.createValidators()));
    return await controller.handle(request, response);
  }

  static findAll = async (request: Request, response: Response) => {
    const userRepository = new DbMySqlUserRepository();
    const dbFindAllUsers = new DbFindAllUsers(userRepository)
    const controller = new FindAllUsersController(dbFindAllUsers);
    return await controller.handle(request, response);
  }

  static findOne = async (request: Request, response: Response) => {
    const userRepository = new DbMySqlUserRepository();
    const dbFindUser = new DbFindUser(userRepository);
    const controller = new FindUserController(dbFindUser);
    return await controller.handle(request, response);
  }

  static delete = async (request: Request, response: Response) => {
    const userRepository = new DbMySqlUserRepository();
    const dbDeleteuser = new DbDeleteUser(userRepository);
    const controller = new DeleteUserController(dbDeleteuser);
    return await controller.handle(request, response);
  }
  
  static update = async (request: Request, response: Response) => {
    const userRepository = new DbMySqlUserRepository();
    const dbUpdateUser = new DbUpdateUser(userRepository);
    const controller = new UpdateUserController(dbUpdateUser, new ValidationComposite(this.createValidators()));
    return await controller.handle(request, response);
  }

  private static createValidators = (): Validation[] => {
    const validations : Validation[] = [];
    validations.push(new EmailValidator());
    validations.push(new CpfValidator());
    validations.push(new DateValidator());
    for(const field of ["name", "email", "cpf", "password", "birthDate"]){
      validations.push(new RequiredFieldValidator(field));
    }
    return validations;
  }
}