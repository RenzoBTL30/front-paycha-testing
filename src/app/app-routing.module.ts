import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './dashboard/gestion-usuario/usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { GestionProductoComponent } from './dashboard/gestion-producto/gestion-producto.component';
import { GestionCategoriaComponent } from './dashboard/gestion-categoria/gestion-categoria.component';
import { GestionRolComponent } from './dashboard/gestion-rol/gestion-rol.component';
import { ReporteVentasComponent } from './dashboard/reporte-ventas/reporte-ventas.component';
import { OrdenesTerminadasComponent } from './dashboard/ordenes-terminadas/ordenes-terminadas.component';
import { OrdenesPendientesComponent } from './dashboard/ordenes-pendientes/ordenes-pendientes.component';
import { ClientesComponent } from './dashboard/gestion-usuario/clientes/clientes.component';
import { GestionLugarComponent } from './dashboard/gestion-lugar/gestion-lugar.component';
import { GestionAcompanamientoComponent } from './dashboard/gestion-acompanamiento/gestion-acompanamiento.component';
import { GestionTipoAcompanamientoComponent } from './dashboard/gestion-tipo-acompanamiento/gestion-tipo-acompanamiento.component';
import { GestionComboComponent } from './dashboard/gestion-combo/gestion-combo.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'gestionar-productos',
        component: GestionProductoComponent,
      },
      {
        path: 'gestionar-categorias',
        component: GestionCategoriaComponent,
      },
      {
        path: 'gestionar-lugares',
        component: GestionLugarComponent,
      },
      {
        path: 'gestionar-trabajadores',
        component: UsuariosComponent,
      },
      {
        path: 'gestionar-clientes',
        component: ClientesComponent,
      },
      {
        path: 'gestionar-acompanamientos',
        component: GestionAcompanamientoComponent,
      },
      {
        path: 'gestionar-tipoacompanamientos',
        component: GestionTipoAcompanamientoComponent,
      },
      {
        path: 'gestionar-combos',
        component: GestionComboComponent,
      },
      {
        path: 'gestionar-roles',
        component: GestionRolComponent,
      },
      {
        path: 'reporte-ventas',
        component: ReporteVentasComponent,
      },
      {
        path: 'ordenes-terminadas',
        component: OrdenesTerminadasComponent,
      },
      {
        path: 'ordenes-pendientes',
        component: OrdenesPendientesComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
