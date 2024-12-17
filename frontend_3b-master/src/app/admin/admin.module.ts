import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LayoutComponent } from './layout/layout.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { CategoriaService } from './inventario/services/categoria.service';
import { TableModule } from 'primeng/table';
import { InventarioModule } from './inventario/inventario.module';
import { ProductoService } from './inventario/services/producto.service';


@NgModule({
  declarations: [
    ClienteComponent,
    PerfilComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppLayoutModule,
    TableModule,
    InventarioModule
  ],

  providers:[
    CategoriaService,
    ProductoService
  ]
})
export class AdminModule { }
