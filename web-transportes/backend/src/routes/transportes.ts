import { Router } from 'express';
import { AppDataSource } from '../database';
import { Transporte } from '../entities/Transporte';

const router = Router();
const transporteRepository = AppDataSource.getRepository(Transporte);

// Obtener todos los transportes
router.get('/', async (req, res) => {
  try {
    const transportes = await transporteRepository.find();
    res.json(transportes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener transportes' });
  }
});

// Obtener transporte por ID
router.get('/:id', async (req, res) => {
  try {
    const transporte = await transporteRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!transporte) {
      return res.status(404).json({ error: 'Transporte no encontrado' });
    }
    res.json(transporte);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener transporte' });
  }
});

// Crear transporte
router.post('/', async (req, res) => {
  try {
    const { nombre, empresa, origen, destino, precio, fecha, capacidad } = req.body;
    const transporte = transporteRepository.create({
      nombre,
      empresa,
      origen,
      destino,
      precio,
      fecha,
      capacidad,
    });
    await transporteRepository.save(transporte);
    res.status(201).json(transporte);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear transporte' });
  }
});

// Actualizar transporte
router.put('/:id', async (req, res) => {
  try {
    const { nombre, empresa, origen, destino, precio, fecha, capacidad } = req.body;
    const transporte = await transporteRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!transporte) {
      return res.status(404).json({ error: 'Transporte no encontrado' });
    }
    await transporteRepository.update(parseInt(req.params.id), {
      nombre,
      empresa,
      origen,
      destino,
      precio,
      fecha,
      capacidad,
    });
    const updated = await transporteRepository.findOneBy({ id: parseInt(req.params.id) });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar transporte' });
  }
});

// Eliminar transporte
router.delete('/:id', async (req, res) => {
  try {
    await transporteRepository.delete(parseInt(req.params.id));
    res.json({ message: 'Transporte eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar transporte' });
  }
});

export default router;
