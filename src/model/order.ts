import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    idOrder: number;
    @Column({type: 'int'})
    idUser: number;
    @Column({type: 'int'})
    idProduct: number;
    @Column({default: new Date().toLocaleString()})
    time: string;
    @Column({default: 1})
    quantity: number;
    @Column({type: 'varchar'})
    status: string;
}