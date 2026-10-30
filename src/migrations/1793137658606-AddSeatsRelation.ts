import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class AddSeatsRelation1793137658606 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'seats',
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
            length: '20',
            isNullable: false,
          },
          { name: 'reclining', type: 'boolean', isNullable: false },
          { name: 'theater_id', type: 'int', isNullable: false },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'seats',
      new TableForeignKey({
        name: 'FK_seats_theater_id',
        columnNames: ['theater_id'],
        referencedTableName: 'theaters',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('seats');
  }
}
