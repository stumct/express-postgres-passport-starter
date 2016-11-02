import passport from 'passport'
import isLoggedIn from './middleware/isLoggedIn'

export default (router) => {

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));

router.get('/signup', (req, res) => {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
})

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));

router.get('/login', (req, res) => {
    res.render('login.ejs', { message: req.flash('loginMessage') });
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

}
