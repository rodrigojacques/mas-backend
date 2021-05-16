import {Request, Response} from 'express'
import { CreateActivyService } from '../services/CreateActivyService'
import { GetActiviesService } from '../services/GetActiviesService'

class ActivyController{

    async create(request: Request, response: Response){

        const ActivyData = request.body

        const createActivy = new CreateActivyService()

        const Activy = await createActivy.execute(ActivyData)

        return response.json(Activy)

    }

    async show(request: Request, response: Response){
        const userId = request.body.user;

        const getActivies = new GetActiviesService();

        const activies = await getActivies.execute(userId);

        return response.json(activies);
    }

}

export {ActivyController}
