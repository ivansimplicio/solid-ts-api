import { notFound } from './../helpers/error-response';
import { FindUser } from './../../domain/useCases/find-user';
import { Request, Response } from 'express';
import { Controller } from './../interfaces/controller';

export class FindUserController implements Controller{

  constructor(private findUser: FindUser) {}

  async handle(request: Request, response: Response): Promise<any> {
    const { id } = request.params;
    const user = await this.findUser.findOne(id);
    if(user){
      return response.status(200).json({user});
    }else{
      return response.status(404).send(notFound("User not found."));
    }
  }
}