import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrdenService } from 'src/app/servicios/orden.service';

@Component({
  selector: 'app-ordenes-pendientes',
  templateUrl: './ordenes-pendientes.component.html',
  styleUrls: ['./ordenes-pendientes.component.css']
})
export class OrdenesPendientesComponent implements OnInit {

  ordenes: any[] = [];

  constructor(
    private ordenService: OrdenService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.getOrdenesPendientes();
  }

  /*
  convertirFecha(fechaUTC: string): Date {
    const fecha = new Date(fechaUTC);
    const gmtOffset = -5; // GMT-5 (Perú)
    const offsetInMs = gmtOffset * 60 * 60 * 1000;
    const fechaGTM5 = new Date(fecha.getTime() + offsetInMs);
    return fechaGTM5;
  }
  */

  updateEstadoToPreparado(id_orden:number) {
    this.ordenService.updateEstado(id_orden,'2').subscribe((data) =>{
      this.toast.success('Correcto');
      this.getOrdenesPendientes();
    })
  }

  getOrdenesPendientes() {

    if (sessionStorage.getItem('rol') == 'Cocina1') {

      this.ordenService.getOrdenesCocina1('1').subscribe((data) => {
        this.ordenes = data;
        console.log(this.ordenes);
      });

    } else if (sessionStorage.getItem('rol') == 'Cocina2') {

      this.ordenService.getOrdenesCocina2('1').subscribe((data) => {
        this.ordenes = data;
      });

      console.log(this.ordenes);

    } else if (sessionStorage.getItem('rol') == 'Bebidas') {

      this.ordenService.getOrdenesBebidas('1').subscribe((data) => {
        this.ordenes = data;
      });

    } else if (sessionStorage.getItem('rol') == 'Promociones') {

      this.ordenService.getOrdenesPromos('1').subscribe((data) => {
        this.ordenes = data;
      });

    }
  }

}
