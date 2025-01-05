import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number; // The amount paid

    @Column()
    paymentMethod: string; // e.g., 'credit_card', 'paypal', etc.

    @Column()
    status: string; // e.g., 'completed', 'pending', 'failed'

    @Column()
    orderId: number; // Store the order ID as a reference
}