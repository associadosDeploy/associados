import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterTableAssociateAddCpfBirthdateColumn1621570221318
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'associates',
      new TableColumn({
        name: 'cpf',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'associates',
      new TableColumn({
        name: 'birthDate',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'associates',
      new TableColumn({
        name: 'phone',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('associates', 'cpf');
    await queryRunner.dropColumn('associates', 'phone');
    await queryRunner.dropColumn('associates', 'birthDate');
  }
}
