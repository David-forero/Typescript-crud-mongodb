import { Router, Request, Response } from 'express';
const router = Router();

//model
import Task from '../model/task';

router.route('/create')
    .get((req: Request, res: Response) => {
        res.render('task/create');
    })
    .post(async (req: Request, res: Response) => {
        const { titulo, descripcion } = req.body;
        const guardar = new Task({titulo, descripcion})
        await guardar.save();
        res.redirect('/task/list');
    });

router.route('/list')
    .get(async (req: Request, res: Response) => {
        const tareas = await Task.find();
        res.render('task/list', {tareas});
    });

router.route('/borrar/:id')
    .get(async (req: Request, res: Response) => {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.redirect('/task/list');
    }); 
    
router.route('/editar/:id')
    .get(async (req: Request, res: Response) => {
        const { id } = req.params;
        const editar = await Task.findById(id);
        res.render('task/edit', {editar});
    })
    .post(async (req: Request, res: Response) => {
        const { id } = req.params;
        const { titulo, descripcion } = req.body;
        await Task.findByIdAndUpdate(id, {titulo, descripcion});
        res.redirect('/task/list');
    });   
    

export default router;