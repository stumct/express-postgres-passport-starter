import isLoggedIn from './middleware/isLoggedIn'
export default (router) => {
    router.get('/profile', isLoggedIn, (req, res) => {
        res.render('profile.ejs', {
            user: req.user // get the user out of session and pass to template
        });
    })
}