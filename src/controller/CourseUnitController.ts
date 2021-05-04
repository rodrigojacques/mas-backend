import {Request, response, Response} from 'express'
import { CreateCourseUnitService } from '../services/CreateCourseUnitService'

class CourseUnitController{

    async create(request: Request, responde: Response){

        const CourseUnitData = request.body

        const createCourseUnit = new CreateCourseUnitService()

        const CourseUnit = await createCourseUnit.execute(CourseUnitData)

        return response.json(CourseUnit)

    }


}

export {CourseUnitController}
