import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransporteService } from '../../services/transporte';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ventas',
  imports: [CommonModule, FormsModule],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas implements OnInit {
  ventas$!: Observable<any[]>;
  formulario = {
    transporteId: 0,
    pasajero: '',
    cantidad: 1
  };
  registrada = false;

  constructor(private transporteService: TransporteService) {}

  ngOnInit() {
    this.ventas$ = this.transporteService.getVentas();
  }

  registrarVenta() {
    if (this.formulario.transporteId && this.formulario.pasajero && this.formulario.cantidad > 0) {
      const total = this.formulario.cantidad * 900; // Precio aproximado en MXN
      this.transporteService.crearVenta({
        id: 0,
        transporteId: this.formulario.transporteId,
        pasajero: this.formulario.pasajero,
        cantidad: this.formulario.cantidad,
        total: total,
        fecha: new Date().toISOString().split('T')[0]
      }).subscribe(() => {
        this.registrada = true;
        this.formulario = { transporteId: 0, pasajero: '', cantidad: 1 };
        this.ventas$ = this.transporteService.getVentas();
        setTimeout(() => this.registrada = false, 3000);
      });
    }
  }
}
