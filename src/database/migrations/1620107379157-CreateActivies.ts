import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivies1620107379157 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "activies",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name:"course_unit_id",
                        type:"varchar",
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name:"activy_date",
                        type:"timestamp"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name:'ActivyCourseUnit',
                        referencedTableName:'course_units',
                        referencedColumnNames: ['id'],
                        columnNames: ['course_unit_id']
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("activies")
    }

}
