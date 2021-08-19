import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AlterTableAssociateRemoveNotNUllUserId1621571707208
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE public.associates ALTER COLUMN user_id DROP NOT NULL;`,
    );

    await queryRunner.query(
      `ALTER TABLE public.associates ALTER COLUMN avatar DROP NOT NULL;`,
    );

    await queryRunner.query(
      `ALTER TABLE public.course ALTER COLUMN avatar DROP NOT NULL;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE public.associates ALTER COLUMN user_id SET NOT NULL;`,
    );

    await queryRunner.query(
      `ALTER TABLE public.associates ALTER COLUMN avatar SET NOT NULL;`,
    );

    await queryRunner.query(
      `ALTER TABLE public.course ALTER COLUMN avatar SET NOT NULL;`,
    );
  }
}
