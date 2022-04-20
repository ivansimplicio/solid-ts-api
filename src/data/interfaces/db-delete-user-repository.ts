export interface DbDeleteUserRepository {
  delete(id: string): Promise<boolean>;
}