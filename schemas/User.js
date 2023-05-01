/* eslint-disable comma-dangle */
import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Nome obrigatório'],
    },
    email: {
        type: String,
        required: [true, 'E-mail obrigatório'],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Senha obrigatória'],
        select: false,
    },
    creation: {
        type: Date,
        default: Date.now(),
    },
});

export default model('Users2', UserSchema);
