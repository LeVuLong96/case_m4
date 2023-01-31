import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class OrderDetails {
    @PrimaryGeneratedColumn()
    idOrderDetails: number;
    @Column({type: 'int'})
    idOrder: number;
}

