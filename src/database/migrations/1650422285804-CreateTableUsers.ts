import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsers1650461682867 implements MigrationInterface {

  private tableName = "users";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: this.tableName,
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          generationStrategy: "increment",
          isGenerated: true
        },
        {
          name: "name",
          type: "varchar(50)",
          isNullable: false,
        },
        {
          name: "email",
          type: "varchar(50)",
          isUnique: true,
          isNullable: false,
        },
        {
          name: "cpf",
          type: "varchar(11)",
          isUnique: true,
          isNullable: false,
        },
        {
          name: "password",
          type: "varchar(30)",
          isNullable: false,
        },
        {
          name: "birthDate",
          type: "timestamp",
        },
        {
          name: "createdAt",
          type: "timestamp",
          default: "now()"
        },
        {
          name: "updatedAt",
          type: "timestamp",
          default: "now()"
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}