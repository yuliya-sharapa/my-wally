const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) return res.status(401).json({errorMessage: "Unauthorized"})

        const verified = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = verified.user;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({errorMessage: "Unauthorized"})
    }
}

module.exports = auth;