import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Transporte {
  id: number;
  nombre: string;
  empresa: string;
  origen: string;
  destino: string;
  precio: number;
  fecha: string;
  capacidad: number;
}

interface Ruta {
  id: number;
  nombre: string;
  origen: string;
  destino: string;
  distancia: number;
}

interface Venta {
  id: number;
  transporteId: number;
  pasajero: string;
  cantidad: number;
  total: number;
  fecha: string;
}

interface Registro {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  fecha: string;
}

@Injectable({
  providedIn: 'root',
})
export class TransporteService {
  private apiUrl = 'http://localhost:3000/api'; // API Backend

  constructor(private http: HttpClient) {}

  // Obtener todos los transportes
  getTransportes(): Observable<Transporte[]> {
    return this.http.get<Transporte[]>(`${this.apiUrl}/transportes`).pipe(
      catchError(() => {
        // Si falla la API, retornar datos de ejemplo
        return of([
          {
            id: 1,
            nombre: 'Bus Directo A',
            empresa: 'Transportes Rápidos',
            origen: 'Madrid',
            destino: 'Barcelona',
            precio: 827.82,
            fecha: '2026-06-20',
            capacidad: 50
          }
        ]);
      })
    );
  }

  // Obtener un transporte por ID
  getTransporteById(id: number): Observable<Transporte> {
    return this.http.get<Transporte>(`${this.apiUrl}/transportes/${id}`);
  }

  // Obtener todas las rutas
  getRutas(): Observable<Ruta[]> {
    return of([
      { id: 1, nombre: 'Ruta Madrid-Barcelona', origen: 'Madrid', destino: 'Barcelona', distancia: 630 },
      { id: 2, nombre: 'Ruta Valencia-Málaga', origen: 'Valencia', destino: 'Málaga', distancia: 480 },
      { id: 3, nombre: 'Ruta Sevilla-Granada', origen: 'Sevilla', destino: 'Granada', distancia: 250 }
    ]);
  }

  // Obtener todas las ventas
  getVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${this.apiUrl}/ventas`).pipe(
      catchError(() => {
        return of([
          { id: 1, transporteId: 1, pasajero: 'Juan García', cantidad: 2, total: 1655.64, fecha: '2026-06-10' }
        ]);
      })
       ]);
      })
    );
  }

  // Crear this.http.post<Venta>(`${this.apiUrl}/ventas`, venta
  crearVenta(venta: Venta): Observable<Venta> {
    return of({ ...venta, id: Date.now() });
  }

  // Obtenethis.http.get<Registro[]>(`${this.apiUrl}/registros`).pipe(
      catchError(() => {
        return of([
          { id: 1, nombre: 'Transportes Rápidos', email: 'info@rapidos.com', telefono: '555-0001', empresa: 'Transportes Rápidos', fecha: '2026-01-15' }
        ]);
      })
     { id: 1, nombre: 'Transportes Rápidos', email: 'info@rapidos.com', telefono: '555-0001', empresa: 'Transportes Rápidos', fecha: '2026-01-15' },
      { id: 2, nombre: 'Viajes Premium', email: 'info@premium.com', telefono: '555-0002', empresa: 'Viajes Premium', fecha: '2026-02-20' }
    ]);
  }
this.http.post<Registro>(`${this.apiUrl}/registros`, registro
  // Crear nuevo registro
  crearRegistro(registro: Registro): Observable<Registro> {
    return of({ ...registro, id: Date.now() });
  }
}
