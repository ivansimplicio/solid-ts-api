import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export class User {

  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  name: string;

  @Column({
    unique: true
  })
  email: string;

  @Column({
    unique: true
  })
  cpf: string;

  @Column()
  password: string;

  @Column()
  birthDate: Date;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}