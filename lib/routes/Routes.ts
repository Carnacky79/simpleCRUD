import {Request, Response} from "express";
import { UserController } from "../controllers/Controller";



export class Routes {

    public userController: UserController = new UserController();

    public routes(app): void {

        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request OK'
            })
        })


        app.route('/contact')
        .get(this.userController.getUsers)
        .post(this.userController.addNewUser)


        app.route('/contact/:contactId')
        .get(this.userController.getUserByID)
        .put(this.userController.updateUser)
        .delete(this.userController.deleteUser)
    }
}