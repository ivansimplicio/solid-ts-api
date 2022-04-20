export class InvalidEmail extends Error{
  constructor(){
    super("Invalid Email.");
    this.name = "InvalidEmail";
  }
}