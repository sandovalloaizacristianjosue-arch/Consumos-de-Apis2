import { Router } from 'express';
import { AppDataSource } from '../database';
import { Registro } from '../entities/Registro';

const router = Router();
const registroRepository = AppDataSource.getRepository(Registro);

// Obtener todos los registros
router.get('/', async (req, res) => {
  try {
    const registros = await registroRepository.find();
    res.json(registros);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener registros' });
  }
});

// Crear registro
router.post('/', async (req, res) => {
  try {
    const { nombre, email, telefono, empresa, fecha } = req.body;
    const registro = registroRepository.create({
      nombre,
      email,
      telefono,
      empresa,
      fecha,
    });
    await registroRepository.save(registro);
    res.status(201).json(registro);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear registro' });
  }
});

export default router;
