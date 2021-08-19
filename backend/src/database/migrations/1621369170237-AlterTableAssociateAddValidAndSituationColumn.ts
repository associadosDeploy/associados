import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterTableAssociateAddValidAndSituationColumn1621369170237
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'associates',
      new TableColumn({
        name: 'valid',
        type: 'integer',
      }),
    );

    await queryRunner.addColumn(
      'associates',
      new TableColumn({
        name: 'visible',
        type: 'boolean',
        default: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('associates', 'valid');
    await queryRunner.dropColumn('associates', 'visible');
  }
}
