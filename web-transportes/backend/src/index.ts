import express from 'express';
import cors from 'cors';
import { AppDataSource } from './database';
import transporteRoutes from './routes/transportes';
import rutaRoutes from './routes/rutas';
import ventaRoutes from './routes/ventas';
import registroRoutes from './routes/registros';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/transportes', transporteRoutes);
app.use('/api/rutas', rutaRoutes);
app.use('/api/ventas', ventaRoutes);
app.use('/api/registros', registroRoutes);

// Inicializar base de datos y arrancar servidor
AppDataSource.initialize()
  .then(() => {
    console.log('Base de datos conectada correctamente');
    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar la base de datos:', error);
    process.exit(1);
  });
