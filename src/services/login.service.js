import jwt from 'jsonwebtoken';
import passport from 'passport';

const login = (req, res) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        console.log(user);
        if (err || !user) {
            return res.status(400).json({
                message: err,
                user   : user
            });
        }
        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }
            // generate a signed son web token with the contents of user object and return it in the response
            const token = jwt.sign(user, 'your_jwt_secret');
            return res.json({user, token});
        })
    })(req, res);
};

export default login;