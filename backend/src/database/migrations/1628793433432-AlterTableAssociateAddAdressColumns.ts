import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterTableAssociateAddAdressColumns1628793433432
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'associates',
      new TableColumn({
        name: 'city',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'associates',
      new TableColumn({
        name: 'state',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'associates',
      new TableColumn({
        name: 'cep',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'associates',
      new TableColumn({
        name: 'oab',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('associates', 'oab');
    await queryRunner.dropColumn('associates', 'cep');
    await queryRunner.dropColumn('associates', 'state');
    await queryRunner.dropColumn('associates', 'city');
  }
}
