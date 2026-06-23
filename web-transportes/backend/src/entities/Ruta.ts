import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('rutas')
export class Ruta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  origen: string;

  @Column()
  destino: string;

  @Column()
  distancia: number;
}
