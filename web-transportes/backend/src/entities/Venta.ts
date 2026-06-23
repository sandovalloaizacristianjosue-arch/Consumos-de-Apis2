import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  transporteId: number;

  @Column()
  pasajero: string;

  @Column()
  cantidad: number;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @Column()
  fecha: string;
}
