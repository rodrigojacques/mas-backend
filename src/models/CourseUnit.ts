import {Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'
import { Activy } from './Activy'


@Entity("CourseUnit")
class CourseUnit {

    constructor(){
        if(!this.id){
            this.id = uuid()    
        }

    }

    @OneToMany(() => Activy, activy => activy.course_unit)
    activies: Activy[]

    @PrimaryColumn()
    readonly id:string

    @Column()
    name: string

    @Column()
    description: string

    @CreateDateColumn()
    created_at: Date

} 

export {CourseUnit}