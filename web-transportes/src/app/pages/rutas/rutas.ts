import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransporteService } from '../../services/transporte';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rutas',
  imports: [CommonModule],
  templateUrl: './rutas.html',
  styleUrl: './rutas.css',
})
export class Rutas implements OnInit {
  rutas$!: Observable<any[]>;

  constructor(private transporteService: TransporteService) {}

  ngOnInit() {
    this.rutas$ = this.transporteService.getRutas();
  }
}
