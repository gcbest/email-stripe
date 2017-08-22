module.exports = (req, res, next) => {
    // next is similar to the done callback
    if (req.user.credits < 1) {
        return res.status(403).send({ error: 'Not enough credits' });
    }

    next();
};