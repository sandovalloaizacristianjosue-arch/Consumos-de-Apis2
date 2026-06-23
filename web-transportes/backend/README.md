# Backend Transportes

Backend Node.js con Express y TypeORM para la aplicación de transportes.

## Instalación

1. Navega a la carpeta backend:
```bash
cd backend
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno en `.env`:
```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=
DB_NAME=postgres
PORT=3000
```

## Ejecución

En desarrollo:
```bash
npm run dev
```

En producción:
```bash
npm run build
npm start
```

## Rutas de la API

- `GET /api/transportes` - Obtener todos los transportes
- `GET /api/transportes/:id` - Obtener un transporte
- `POST /api/transportes` - Crear transporte
- `PUT /api/transportes/:id` - Actualizar transporte
- `DELETE /api/transportes/:id` - Eliminar transporte

- `GET /api/rutas` - Obtener todas las rutas
- `POST /api/rutas` - Crear ruta

- `GET /api/ventas` - Obtener todas las ventas
- `POST /api/ventas` - Crear venta

- `GET /api/registros` - Obtener registros
- `POST /api/registros` - Crear registro

## Base de Datos

La base de datos se crea automáticamente al iniciar el servidor con TypeORM synchronize habilitado.

Las tablas creadas son:
- `transportes`
- `rutas`
- `ventas`
- `registros`
