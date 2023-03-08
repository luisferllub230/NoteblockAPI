import { Schema, model } from 'mongoose';
import {userSchema} from '../schema/userSchema.js';

const userSchemas = new Schema(userSchema);

export default model('users', userSchemas);