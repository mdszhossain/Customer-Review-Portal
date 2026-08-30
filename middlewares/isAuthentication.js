module.exports.isLoggedin = (req, res, next) => {
    if(!req.isAuthenticated()) {
        return res.redirect("/crp/signin");
    }
    return next();
}