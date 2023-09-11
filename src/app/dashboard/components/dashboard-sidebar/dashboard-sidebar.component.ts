import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modulo } from 'src/app/models/modulo';

export const modulosAdmin: Modulo[] = [
  { nombre: 'Gestionar Productos', ruta: 'gestionar-productos' },
  { nombre: 'Gestionar Categorías', ruta: 'gestionar-categorias' },
  { nombre: 'Gestionar Acompanamientos', ruta: 'gestionar-acompanamientos' },
  { nombre: 'Gestionar Tipos de Acompanamiento', ruta: 'gestionar-tipoacompanamientos' },
  { nombre: 'Gestionar Combos', ruta: 'gestionar-combos' },
  { nombre: 'Gestionar Lugares', ruta: 'gestionar-lugares' },
];

export const modulosCocina1: Modulo[] = [
  { nombre: 'Ordenes Pendientes', ruta: 'ordenes-pendientes' },
];

export const modulosCocina2: Modulo[] = [
  { nombre: 'Ordenes Pendientes', ruta: 'ordenes-pendientes' },
];

export const modulosBebidas: Modulo[] = [
  { nombre: 'Ordenes Pendientes', ruta: 'ordenes-pendientes' },
];

export const modulosPromociones: Modulo[] = [
  { nombre: 'Ordenes Pendientes', ruta: 'ordenes-pendientes' },
];


@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css'],
})

export class DashboardSidebarComponent implements OnInit {
  @Input() sidebarIsOpen: boolean = false;

  modulos: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getModulos();
  }

  routeToMenu(route: string) {
    this.router.navigate([`/dashboard/${route}`]);
  }

  getModulos() {
    switch (sessionStorage.getItem('rol')) {
      case 'Administrador':
        this.modulos = modulosAdmin;
        break;
      case 'Cocina1':
        this.modulos = modulosCocina1;
        break;
      case 'Cocina2':
        this.modulos = modulosCocina2;
        break;
      case 'Bebidas':
        this.modulos = modulosBebidas;
        break;
      case 'Promociones':
        this.modulos = modulosPromociones;
        break;
    
      default:
        break;
    }
  }
}
