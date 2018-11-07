import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import {Pet} from './Pet';

@Entity()
export class Talent{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(type => Pet, pet => pet.talents)
  pets : Pet[]
}