import moment from "moment";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Operator } from "./operator";

@Entity({ name: "clients" })
export class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  birthDate: string;

  @Column()
  value: number;

  @Column()
  email: string;

  @ManyToOne((type) => Operator, (operator) => operator.clients)
  operator: Operator;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  insertCreated() {
    this.created_at = new Date(moment().format("YYYY-MM-DD HH:mm:ss"));
    this.updated_at = new Date(moment().format("YYYY-MM-DD HH:mm:ss"));
  }

  @BeforeUpdate()
  insertUpdated() {
    this.updated_at = new Date(moment().format("YYYY-MM-DD HH:mm:ss"));
  }
}
