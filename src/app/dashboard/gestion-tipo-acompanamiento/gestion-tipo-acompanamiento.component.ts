import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TipoAcompanamientoService } from 'src/app/servicios/tipo-acompanamiento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-tipo-acompanamiento',
  templateUrl: './gestion-tipo-acompanamiento.component.html',
  styleUrls: ['./gestion-tipo-acompanamiento.component.css']
})
export class GestionTipoAcompanamientoComponent implements OnInit {

  searchedString: string = '';
  tipoAcompanamientos: any[] = [];

  id_tipo_acompanamiento?: number;
  tipo?: string;

  isLoading?: boolean;

  constructor(
    private tipoAcompService: TipoAcompanamientoService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.getTipoAcomps();
  }

  getTipoAcomps() {
    this.isLoading = true;
    this.tipoAcompService.getTipoAcomp().subscribe((data) => {
      this.tipoAcompanamientos = data;
      this.isLoading = false;
    });
  }

  getTipoAcomps2daVez($event:any){
    this.tipoAcompService.getTipoAcomp().subscribe((data) => {
      this.tipoAcompanamientos = data;
    });
  }

  edit(
    id_tipo_acompanamiento: number,
    tipo: string,
  ) {
    this.id_tipo_acompanamiento = id_tipo_acompanamiento;
    this.tipo = tipo;
  }

  
  deleteTipoAcomp(id_tipo_acompanamiento: number) {
    Swal.fire({
      title: '¿Estás seguro que deseas eliminar este tipo de acompanamiento?',
      text: "ADVERTENCIA: Recuerda que debes eliminar todos los acompanamientos del tipo antes de eliminarlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.toast.success('Tipo de Acompanamiento eliminado correctamente');
        this.tipoAcompService.deleteTipoAcomp(id_tipo_acompanamiento).subscribe((data) =>{
          this.getTipoAcomps();
        });
        
      }
    })

    
  }

}
