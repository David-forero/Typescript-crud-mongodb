import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    titulo:{
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});

export default model('Tareas', taskSchema);