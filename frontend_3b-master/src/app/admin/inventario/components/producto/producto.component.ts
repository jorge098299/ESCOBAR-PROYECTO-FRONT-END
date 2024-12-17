import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

  private productoService = inject(ProductoService)

  categorias: any =[
    {name:'Ropa Dama', code:'RD'},
    {name:'Ropa Caballero', code:'RC'},
    {name:'Herramientas', code:'He'},
    {name:'Tecnologia', code:'Tec'},
    {name:'Hogar', code:'Hgr'}
  ]

  products: any[]=[
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:1, stock:12, estado:"COMPELTO"},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:1, stock:12, estado:"COMPELTO"},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:1, stock:12, estado:"COMPELTO"},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:1, stock:12, estado:"COMPELTO"},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:1, stock:12, estado:"COMPELTO"},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:1, stock:12, estado:"COMPELTO"},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:1, stock:12, estado:"COMPELTO"}

    ];

    cols: any []=[];

  constructor(){
    this.productoService.funListar().subscribe(
      (res:any)=>{
        this.products=res.data
      }
    )
  }


  openNew(){

  }

  editProduct(prod:any){

  }

  deleteProduct(prod:any){

  }


}
