import { InvalidDate } from '../presentation/errors/invalid-date';
import { Validation } from './../presentation/interfaces/validation';

export class DateValidator implements Validation {
  validate(input: any): Error {
    const pattern = /\d{2}-\d{2}-\d{4}/;
    const isValid = pattern.test(input["birthDate"]);
    if(!isValid){
      return new InvalidDate();
    }
  }
}