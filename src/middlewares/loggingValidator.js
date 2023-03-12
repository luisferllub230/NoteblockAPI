export const isLogged = (req, res, next) => {
    if(!req.session.isUserLogged || req.session.userId === undefined)
        return res.status(401).json({
            message: "You are not logged in",
            status: 401,
            isUserValidate: false
        });

    next();
};