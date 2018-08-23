import passport from 'passport';
import PassportLocal from 'passport-local';
import {User} from './models'

passport.use(new PassportLocal.Strategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    (email, password, done) => {
        return User.findAll({where: {email, password}})
            .then(user => {
                if (!user) {
                    return done(null, false, {message: 'Incorrect email or password.'});
                }
                return done(null, user, {message: 'Logged In Successfully'});
            })
            .catch(err => done(err));
    }
));