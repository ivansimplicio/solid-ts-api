import { MissingParamError } from '../presentation/errors/missing-param-error';
import { Validation } from '../presentation/interfaces/validation';

export class RequiredFieldValidator implements Validation {

  constructor(private fieldName: string){}

  validate(input: any): Error {
    if(!input[this.fieldName]){
      return new MissingParamError(this.fieldName);
    }
  }
}