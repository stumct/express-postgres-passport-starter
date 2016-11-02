import express from 'express'
const app = express();
import passport from 'passport'
import passportConfig from './config/passport'
passportConfig(passport);
import flash from 'connect-flash'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import session from 'express-session'
import routes from './routes'
// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', __dirname + '/views');
//app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'superSecureSecret_superSecureSecret_superSecureSecret_',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

routes(app)

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});