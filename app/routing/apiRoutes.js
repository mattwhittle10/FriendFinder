var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        console.log(rec.body);
        var newUser = req.body;
        console.log(newUser);

        for (var i = 0; i < newUser.length; i++) {
            newUser.scores[i] = parseInt(newUser.scores[i]);
        }
        friends.push(newUser);
    });
}
