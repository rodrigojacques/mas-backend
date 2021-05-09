import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'
import { CourseUnit } from './CourseUnit'


@Entity("Activy")
class Activy {

    constructor(){
        if(!this.id){
            this.id = uuid()    
        }
    }

    @ManyToOne(() => CourseUnit, course_unit => course_unit.activies)
    course_unit: CourseUnit

    @PrimaryColumn()
    readonly id:string

    @Column()
    course_unit_id: string;

    @Column()
    name: string

    @CreateDateColumn()
    activy_date: Date

    @CreateDateColumn()
    created_at: Date

} 

export {Activy}
