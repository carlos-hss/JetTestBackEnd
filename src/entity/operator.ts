import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  UpdateDateColumn,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { Client } from "./client";
import moment from "moment";

@Entity({ name: "operators" })
export class Operator {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @OneToMany((type) => Client, (client) => client.operator)
  clients: Client[];

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
