import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column()
    name: string;

    @Column({ select: false })
    password: string;

    @Column({ unique: true })
    email: string;

    @Column()
    telephone: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.contacts)
    user: User;
}