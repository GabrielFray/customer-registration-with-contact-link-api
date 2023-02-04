import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Contact } from "./contact.entity";

@Entity()
export class User {
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

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts: Contact[]
}