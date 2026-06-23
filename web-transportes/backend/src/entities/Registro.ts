import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('registros')
export class Registro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column()
  telefono: string;

  @Column()
  empresa: string;

  @Column()
  fecha: string;
}
