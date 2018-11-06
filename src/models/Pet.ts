import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Pet{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  color: string;

  @Column()
  age: number;

}