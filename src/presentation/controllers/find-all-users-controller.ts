import { FindAllUsers } from './../../domain/useCases/find-all-users';
import { Request, Response } from 'express';
import { Controller } from './../interfaces/controller';

export class FindAllUsersController implements Controller{

  constructor(private findAllUsers: FindAllUsers){}

  async handle(_request: Request, response: Response): Promise<any>{
    const users = await this.findAllUsers.findAll();
    return response.status(200).json({users});
  }
}