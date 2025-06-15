import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';

import User from './User';

@Entity('associates')
class Associates extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  name: string;

  @Column()
  birthDate: string;

  @Column()
  cpf: string;

  @Column()
  phone: string;

  @Column()
  rg: string;

  @Column()
  emissor: string;

  @Column()
  affiliation: string;

  @Column()
  rg_uf: string;

  @Column()
  shipping_date: string;

  @Column()
  naturalness: string;

  @Column()
  naturalness_uf: string;

  @Column()
  address: string;

  @Column()
  email_data: string;

  @Column()
  profession: string;

  @Column()
  education: string;

  @Column()
  specialization: string;

  @Column()
  email_profession: string;

  @Column()
  acting: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  oab: string;

  @Column()
  cep: string;

  @Column()
  avatar: string;

  @Column()
  visible: boolean;

  @Column()
  valid: number;

  @Column("simple-array", { nullable: true })
  documentLinks: string[];

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Associates;
