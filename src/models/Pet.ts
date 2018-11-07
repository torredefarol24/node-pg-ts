import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import { User } from './User';
import { Talent } from './Talent';

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

  @ManyToMany(type => Talent, talent => talent.pets)
  @JoinTable()
  talents : Talent[]
}