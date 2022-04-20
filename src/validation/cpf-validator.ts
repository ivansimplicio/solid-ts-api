import { InvalidCPF } from '../presentation/errors/invalid-cpf';
import { Validation } from './../presentation/interfaces/validation';

import { cpf } from 'cpf-cnpj-validator'; 

export class CpfValidator implements Validation {

  validate(input: any): Error {
    const isValid = cpf.isValid(input["cpf"]);
    if(!isValid){
      return new InvalidCPF();
    }
  }
}