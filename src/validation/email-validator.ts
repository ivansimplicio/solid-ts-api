import { InvalidEmail } from './../presentation/errors/invalid-email';
import { Validation } from '../presentation/interfaces/validation';

import validator from 'validator';

export class EmailValidator implements Validation{

  validate(input: any): Error {
    const isEmail = validator.isEmail(input["email"]);
    if(!isEmail){
      return new InvalidEmail();
    }
  }
}