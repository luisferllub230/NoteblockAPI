const notRouterController = (req, res, next) => {
    res.status(404).json({
        message: "Route not found",
        code: 404,
        timestamp: new Date().toISOString()
    });
}

export default {
    notRouterController
}