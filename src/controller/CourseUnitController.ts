import {Request, Response} from 'express'
import { CreateCourseUnitService } from '../services/CreateCourseUnitService'
import { GetCoursesUnitsService } from '../services/GetCoursesUnitsService'

class CourseUnitController{

    async create(request: Request, response: Response){

        const CourseUnitData = request.body

        const createCourseUnit = new CreateCourseUnitService()

        const CourseUnit = await createCourseUnit.execute(CourseUnitData)

        return response.json(CourseUnit)

    }

    async show(request: Request, response: Response){
        const userId = request.body.user;

        const getCoursesUnits = new GetCoursesUnitsService();

        const coursesUnits = await getCoursesUnits.execute(userId);

        return response.json(coursesUnits);
    }


}

export {CourseUnitController}
