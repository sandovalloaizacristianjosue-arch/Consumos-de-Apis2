import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransporteService } from '../../services/transporte';

@Component({
  selector: 'app-registro',
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  formulario = {
    nombre: '',
    email: '',
    telefono: '',
    empresa: ''
  };
  enviado = false;

  constructor(private transporteService: TransporteService) {}

  enviarFormulario() {
    if (this.formulario.nombre && this.formulario.email && this.formulario.telefono && this.formulario.empresa) {
      this.transporteService.crearRegistro({
        id: 0,
        nombre: this.formulario.nombre,
        email: this.formulario.email,
        telefono: this.formulario.telefono,
        empresa: this.formulario.empresa,
        fecha: new Date().toISOString().split('T')[0]
      }).subscribe(() => {
        this.enviado = true;
        this.formulario = { nombre: '', email: '', telefono: '', empresa: '' };
        setTimeout(() => this.enviado = false, 3000);
      });
    }
  }
}
