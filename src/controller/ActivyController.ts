import {Request, response, Response} from 'express'
import { CreateActivyService } from '../services/CreateActivyService'

class ActivyController{

    async create(request: Request, responde: Response){

        const ActivyData = request.body

        const createActivy = new CreateActivyService()

        const Activy = await createActivy.execute(ActivyData)

        return response.json(Activy)

    }

}

export {ActivyController}
