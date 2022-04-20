import { notFound } from './../helpers/error-response';
import { DeleteUser } from './../../domain/useCases/delete-user';
import { Controller } from './../interfaces/controller';
import { Request, Response } from 'express';

export class DeleteUserController implements Controller {

  constructor(private deleteUser: DeleteUser){}

  async handle(request: Request, response: Response): Promise<any>{
    const { id } = request.params;
    try{
      await this.deleteUser.delete(id);
      return response.status(204).send();
    }catch(error){
      return response.status(404).json(notFound(error.message));
    }
  }
}