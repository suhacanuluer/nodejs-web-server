var middleware = {
        requireAuthentication : (req, res, next) => {
            console.log("Özel route girildi!!");
            next();
        },
        logger : (req, res, next) => {
            console.log(req.method + " " + req.originalUrl);
            next();
        }
    }    

module.exports = middleware;