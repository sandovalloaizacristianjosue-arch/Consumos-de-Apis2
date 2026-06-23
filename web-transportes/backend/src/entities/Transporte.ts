import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('transportes')
export class Transporte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  empresa: string;

  @Column()
  origen: string;

  @Column()
  destino: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column()
  fecha: string;

  @Column()
  capacidad: number;
}
