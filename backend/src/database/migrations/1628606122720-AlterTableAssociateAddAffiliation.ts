import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterTableAssociateAddAffiliation1628606122720
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'associates',
      new TableColumn({
        name: 'affiliation',
        type: 'varchar',
      }),
    );

    await queryRunner.query(
      `ALTER TABLE public.course ALTER COLUMN description TYPE varchar USING description::varchar;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('associates', 'affiliation');
  }
}
