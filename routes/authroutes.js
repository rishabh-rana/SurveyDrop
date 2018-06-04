const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  app.get("/auth/google/callback", passport.authenticate("google"), (req,res) => {
    res.redirect('/surveys');
  });
  app.get("/auth/logout", (req, res) => {
    req.logout();
    res.redirect('/');
  });
  app.get('/api/getuser', (req,res)=> {
    res.send(req.user);
  })

};
//boom