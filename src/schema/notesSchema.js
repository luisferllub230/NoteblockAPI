export const  notesSchema = {
    noteId: Number,
    title: String,
    description: String,
    date: Date,
    color: String,
    isFavorite: Boolean,
    isArchived: Boolean,
    isDeleted: Boolean,
    tag: String,
    userID: String
}