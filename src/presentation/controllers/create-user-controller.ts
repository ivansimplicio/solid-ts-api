import { unprocessableEntity, badRequest } from './../helpers/error-response';
import { Validation } from './../interfaces/validation';
import { CreateUser } from './../../domain/useCases/create-user';
import { Controller } from './../interfaces/controller';
import { Request, Response } from 'express';

export class CreateUserController implements Controller {

  constructor(private createUser: CreateUser, private validation: Validation) {}

  async handle(request: Request, response: Response): Promise<any>{
    const error = this.validation.validate(request.body);
    if(error){
      return response.status(400).json(badRequest(error.message));
    }
    const { name, email, cpf, password, birthDate } = request.body;
    try{
      const user = await this.createUser.create({ name, email, cpf, password, birthDate });
      return response.status(201).json({user});
    }catch(error){
      return response.status(422).json(unprocessableEntity(error.message));
    }
  }
}