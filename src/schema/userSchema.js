export const userSchema = {
    isLogged: Boolean,
    userInformation: {
        name: String,
        lastname: String,
        nickname: String,
        password: String,
        email: String,
        phone: String,
        address: String,
        city: String,
    },
    userNotes: [
        {
            id: Number,
            title: String,
            description: String,
            date: Date,
            color: String,
            isFavorite: Boolean,
            isArchived: Boolean,
            isDeleted: Boolean,
            tag: String,
        }
    ],
    userTasks: [
        {
            id: Number,
            title: String,
            description: String,
        }
    ]
}