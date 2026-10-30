import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from 'typeorm';

export class InitCinemaSchema1793135320152 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'theaters',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'location',
            type: 'varchar',
            length: '120',
            isNullable: false,
          },
          { name: 'capacity', type: 'int', isNullable: false },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'projectors',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'brand', type: 'varchar', length: '120', isNullable: false },
          { name: 'high', type: 'int', isNullable: false },
          { name: 'width', type: 'int', isNullable: false },
          { name: 'theater_id', type: 'int', isNullable: true },
        ],
      }),
    );

    await queryRunner.createUniqueConstraint(
      'projectors',
      new TableUnique({
        name: 'UQ_projectors_theater_id',
        columnNames: ['theater_id'],
      }),
    );
    await queryRunner.createForeignKey(
      'projectors',
      new TableForeignKey({
        name: 'FK_projectors_theater_id',
        columnNames: ['theater_id'],
        referencedTableName: 'theaters',
        referencedColumnNames: ['id'],
        onDelete: 'NO ACTION',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('projectors');
    await queryRunner.dropTable('theaters');
  }
}
