

// TODO : INTEGRATE PASSPORT WITH MONGOOSE AND MONGODB

// import passport from "passport";
// import { Strategy as LocalStrategy } from "passport-local";

// passport.serializeUser((user, done)=>{
//     done(null, user._id);
// });

// passport.deserializeUser( async (id, done)=>{
//     const user = await getUserInfoByIdServices(id);
//     done(null, id);
// });

// passport.use('local-signing', new LocalStrategy(
//     {
//         usernameField: 'name',
//         passwordField: 'password',
//         passReqToCallback: true
//     },
//     async (req, userName, password, done) => {

//         const user = await createUserService(req.body);

//         if (!user.dataSaved)
//             done({ message: user.message }, false);

//         done(null, user);
//     }
// ));