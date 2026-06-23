import { Router } from 'express';
import { AppDataSource } from '../database';
import { Ruta } from '../entities/Ruta';

const router = Router();
const rutaRepository = AppDataSource.getRepository(Ruta);

// Obtener todas las rutas
router.get('/', async (req, res) => {
  try {
    const rutas = await rutaRepository.find();
    res.json(rutas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener rutas' });
  }
});

// Obtener ruta por ID
router.get('/:id', async (req, res) => {
  try {
    const ruta = await rutaRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!ruta) {
      return res.status(404).json({ error: 'Ruta no encontrada' });
    }
    res.json(ruta);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ruta' });
  }
});

// Crear ruta
router.post('/', async (req, res) => {
  try {
    const { nombre, origen, destino, distancia } = req.body;
    const ruta = rutaRepository.create({ nombre, origen, destino, distancia });
    await rutaRepository.save(ruta);
    res.status(201).json(ruta);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear ruta' });
  }
});

export default router;
