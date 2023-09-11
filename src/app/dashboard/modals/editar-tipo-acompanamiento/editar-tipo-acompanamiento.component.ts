import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TipoAcompanamientoService } from 'src/app/servicios/tipo-acompanamiento.service';

@Component({
  selector: 'app-editar-tipo-acompanamiento',
  templateUrl: './editar-tipo-acompanamiento.component.html',
  styleUrls: ['./editar-tipo-acompanamiento.component.css']
})
export class EditarTipoAcompanamientoComponent implements OnInit {

  @Output() volveraListarTipoAcomps = new EventEmitter<void>();

  @ViewChild('close_modal2') close_modal2:any;

  @Input() id_tipoacomp?: number;
  @Input() tip?: string;

  
  constructor(
    private tipoAcompService: TipoAcompanamientoService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  editarTipoAcomp() {
    this.tipoAcompService.editarTipoAcomp(this.id_tipoacomp!,this.tip!).subscribe((data) => {
      this.close_modal2.nativeElement.click();
      this.volveraListarTipoAcomps.emit();
    });
  }

}
