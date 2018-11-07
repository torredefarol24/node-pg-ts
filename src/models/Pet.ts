import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { User } from './User';

@Entity()
export class Pet{

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable : false})
  nickname : string;

  @Column()
  color: string;

  @Column()
  age: number;

  @ManyToOne(type => User, owner => owner.pets, {cascade : true})
  owner: User
}