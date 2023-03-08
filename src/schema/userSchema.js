import { notesSchema } from "./notesSchema.js";
import { labelSchema } from "./labelSchema.js";

export const userSchema = {
    isActiveUser: Boolean,
    name: String,
    lastName: String,
    nickname: String,
    password: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    userNotes: [notesSchema || null],
    userTasks: [labelSchema || null]
}