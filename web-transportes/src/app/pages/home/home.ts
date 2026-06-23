import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransporteService } from '../../services/transporte';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  transportes$!: Observable<any[]>;

  constructor(private transporteService: TransporteService) {}

  ngOnInit() {
    this.transportes$ = this.transporteService.getTransportes();
  }

  comprarBillete(transporteId: number) {
    alert(`Billete del transporte ${transporteId} agregado al carrito`);
  }
}
