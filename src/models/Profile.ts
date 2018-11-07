import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";
import {User} from "./User";

@Entity()
export class Profile{

  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable : false})
  gender: string;

  @Column({ unique : true , nullable : false})
  username: string;

  @OneToOne(type => User, user => user.profile)
  user : User
}