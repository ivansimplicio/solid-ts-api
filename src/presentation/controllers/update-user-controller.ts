import { badRequest, unprocessableEntity } from './../helpers/error-response';
import { Validation } from './../interfaces/validation';
import { UpdateUser } from './../../domain/useCases/update-user';
import { Controller } from './../interfaces/controller';
import { Request, Response } from 'express';

export class UpdateUserController implements Controller {

  constructor(private updateUser: UpdateUser, private validation: Validation){}

  async handle(request: Request, response: Response): Promise<any>{
    const { id } = request.params;
    const error = this.validation.validate(request.body);
    if(error){
      return response.status(400).json(badRequest(error.message));
    }
    try{
      const user = await this.updateUser.update({ id, ...request.body });
      if(user){
        return response.status(200).json({ user });
      }
      return response.status(404).json(badRequest("User not found."));
    }catch(error){
      return response.status(422).json(unprocessableEntity(error.message));
    }
  }
}