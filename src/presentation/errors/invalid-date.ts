export class InvalidDate extends Error {
  constructor(){
    super("Invalid pattern date. Use dd/mm/yyyy.");
    this.name = "InvalidDate";
  }
}