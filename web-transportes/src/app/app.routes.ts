import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Rutas } from './pages/rutas/rutas';
import { Registro } from './pages/registro/registro';
import { Ventas } from './pages/ventas/ventas';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'rutas', component: Rutas },
  { path: 'registro', component: Registro },
  { path: 'ventas', component: Ventas },
  { path: '**', redirectTo: '/home' }
];
