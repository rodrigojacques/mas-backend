import {Request, response, Response} from 'express'
import { CreateUserService } from '../services/CreateUserService'

class UserController{

    async create(request: Request, responde: Response){

        const userData = request.body

        const createUser = new CreateUserService()

        const user = await createUser.execute(userData)

        return response.json(user)
        
    }

}

export {UserController}
