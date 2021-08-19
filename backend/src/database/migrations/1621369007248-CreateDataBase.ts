import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateDataBase1621369007248 implements MigrationInterface {
  name = 'CreateDataBase1621369007248';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "associates" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "name" character varying NOT NULL, "rg" character varying NOT NULL, "emissor" character varying NOT NULL, "rg_uf" character varying NOT NULL, "shipping_date" character varying NOT NULL, "naturalness" character varying NOT NULL, "naturalness_uf" character varying NOT NULL, "address" character varying NOT NULL, "email_data" character varying NOT NULL, "profession" character varying NOT NULL, "education" character varying NOT NULL, "specialization" character varying NOT NULL, "email_profession" character varying NOT NULL, "acting" character varying NOT NULL, "avatar" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_63bee9673682e211433a8b40ed0" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "course" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "link" character varying NOT NULL, "title" character varying NOT NULL, "description" boolean NOT NULL, "avatar" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "associates" ADD CONSTRAINT "FK_72045e04f453d1464959416dbeb" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "course" ADD CONSTRAINT "FK_bb2c8374d6f04bf9301895d1b33" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "course" DROP CONSTRAINT "FK_bb2c8374d6f04bf9301895d1b33"`,
    );
    await queryRunner.query(
      `ALTER TABLE "associates" DROP CONSTRAINT "FK_72045e04f453d1464959416dbeb"`,
    );
    await queryRunner.query(`DROP TABLE "course"`);
    await queryRunner.query(`DROP TABLE "associates"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
