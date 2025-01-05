import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Notification {
    @ObjectIdColumn()
    id: string; // MongoDB uses ObjectId

    @Column()
    orderId: number; // Reference to the order (if applicable)

    @Column()
    message: string; // The notification message

    @Column()
    status: string; // e.g., 'sent', 'pending', 'failed'

    @Column()
    createdAt: Date; // Timestamp for when the notification was created

    constructor() {
        this.createdAt = new Date(); // Set the creation date by default
    }
}