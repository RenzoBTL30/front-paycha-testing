import { Component, OnInit } from '@angular/core';
import { OrdenService } from 'src/app/servicios/orden.service';

@Component({
  selector: 'app-ordenes-terminadas',
  templateUrl: './ordenes-terminadas.component.html',
  styleUrls: ['./ordenes-terminadas.component.css']
})
export class OrdenesTerminadasComponent implements OnInit {

  searchedString: string = '';
  filtroCategoria: string = '';
  filtroDisponibilidad: string = '';
  ordenes: any[] = [];
  

  constructor(
    private ordenService: OrdenService,
  ) { }

  ngOnInit(): void {
    this.getOrdenesEntregadas();
  }
 
  getOrdenesEntregadas() {
    this.ordenService.getOrdenes('3').subscribe((data) => {
      this.ordenes = data;
      console.log(this.ordenes);
    });
  }
}
