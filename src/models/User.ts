import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {Profile} from './Profile';

@Entity()
export class User{

  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable : false})
  firstName: string;

  @Column({nullable : false})
  lastName: string;

  @Column({ unique : true , nullable : false})
  email: string;

  @OneToOne(type => Profile, { eager : true })
  @JoinColumn()
  profile : Profile

}