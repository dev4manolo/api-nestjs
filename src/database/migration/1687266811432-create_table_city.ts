import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableCity1687266815797 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'city',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            // default: 'uuid_generate_v4()',
          },
          {
            name: 'state_id',
            type: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'active',
            type: 'bool',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
      true,
    );

    // await queryRunner.createForeignKey(
    //   'city',
    //   new TableForeignKey({
    //     columnNames: ['state_id'],
    //     referencedColumnNames: ['id'],
    //     referencedTableName: 'state',
    //     onDelete: 'CASCADE',
    //   }),
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        drop table public.city;
    `);
  }
}
