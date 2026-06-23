import { Router } from 'express';
import { AppDataSource } from '../database';
import { Venta } from '../entities/Venta';

const router = Router();
const ventaRepository = AppDataSource.getRepository(Venta);

// Obtener todas las ventas
router.get('/', async (req, res) => {
  try {
    const ventas = await ventaRepository.find();
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ventas' });
  }
});

// Crear venta
router.post('/', async (req, res) => {
  try {
    const { transporteId, pasajero, cantidad, total, fecha } = req.body;
    const venta = ventaRepository.create({
      transporteId,
      pasajero,
      cantidad,
      total,
      fecha,
    });
    await ventaRepository.save(venta);
    res.status(201).json(venta);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear venta' });
  }
});

export default router;
