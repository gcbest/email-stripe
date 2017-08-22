module.exports = (req, res, next) => {
    // next is similar to the done callback
    if (!req.user) {
        return res.status(401).send({ error: 'You must log in!' });
    }

    next();
};