export class InvalidCPF extends Error {
  constructor(){
    super("Invalid CPF.");
    this.name = "InvalidCPF";
  }
}