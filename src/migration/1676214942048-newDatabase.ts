import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class newDatabase1676214942048 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase("crm_db");

    await queryRunner.createTable(
      new Table({
        name: "operators",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
