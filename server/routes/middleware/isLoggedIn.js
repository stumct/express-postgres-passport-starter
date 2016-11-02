// route middleware to make sure a user is logged in
export default (req, res, next) => {
console.log('is user authenticated?', req.isAuthenticated())
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}