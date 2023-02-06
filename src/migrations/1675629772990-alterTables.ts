import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1675629772990 implements MigrationInterface {
    name = 'createTables1675629772990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "isActive"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD "isActive" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "password" character varying NOT NULL`);
    }

}
