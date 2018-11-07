import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany} from "typeorm";
import {Profile} from './Profile';
import {Pet} from './Pet';

@Entity()
export class User{

  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable : false})
  firstName: string;

  @Column({nullable : false})
  lastName: string;

  @Column()
  address: string;

  @Column({ unique : true , nullable : false})
  email: string;

  @OneToOne(type => Profile, { cascade : true})
  @JoinColumn()
  profile : Profile

  @OneToMany(type => Pet, pet => pet.owner)
  pets : Pet[]
}