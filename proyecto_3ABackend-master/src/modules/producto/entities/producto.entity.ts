import { PedidoProducto } from "../../pedido/entities/pedidoproducto.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('productos')
export class Producto {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type: 'varchar', length:250})
    nombre:string;

    @Column({type: 'decimal', precision:10, scale:2})
    precio:number;

    @Column({type: 'int'})
    stock:number;

    @Column({type: 'varchar', length:250, nullable:true})
    image:string;

    @Column({type: 'text', nullable:true})
    descripcion:string;

    @Column({type: 'boolean', default:true})
    estado:boolean;

    @ManyToOne(()=>Categoria, (cat)=>cat.producto)
    categoria: Categoria

    @ManyToMany(()=>PedidoProducto, predprod => predprod.producto)
    pedidoProducto: PedidoProducto[];
}
