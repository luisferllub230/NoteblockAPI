export const isLogged = (req, res, next) => {
    if(!req.session.isUserLogged)
        return res.status(401).redirect("/API/v1/login");

    next();
};