import { DataSource } from 'typeorm';
import { Transporte } from './entities/Transporte';
import { Ruta } from './entities/Ruta';
import { Venta } from './entities/Venta';
import { Registro } from './entities/Registro';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'postgres',
  synchronize: true,
  logging: false,
  entities: [Transporte, Ruta, Venta, Registro],
  migrations: [],
  subscribers: [],
});
