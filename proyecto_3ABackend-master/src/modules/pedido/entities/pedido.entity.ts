import { Cliente } from "../../cliente/entities/cliente.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PedidoProducto } from "./pedidoproducto.entity";

@Entity('pedidos')
export class Pedido {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    fecha:string;

    @Column()
    estado:number;

    @Column()
    observaciones:string;

    @ManyToOne(()=>Cliente)
    cliente:Cliente

    @ManyToMany(()=>PedidoProducto, pedprod=> pedprod.pedido)
    pedidoProducto: PedidoProducto[];
}
