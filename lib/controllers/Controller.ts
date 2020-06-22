import * as mongoose from 'mongoose';
import { UserSchema } from '../models/Model';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);
export class UserController{

    public addNewUser (req: Request, res: Response) {
        let newContact = new User(req.body);

        newContact.save((err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public getUsers (req: Request, res: Response) {
        User.find({}, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUserByID (req: Request, res: Response) {
        User.findById(req.params.contactId, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public updateUser (req: Request, res: Response) {
        User.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public deleteUser (req: Request, res: Response) {
        User.remove({ _id: req.params.contactId }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Utente cancellato!'});
        });
    }

}