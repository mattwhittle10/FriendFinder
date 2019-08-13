var friends = require("../data/friends");

console.log(friends);

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

        // var bestFriendIndex = 0;
        // var minDistance = 40;

        // for(var i = 0; i < friends.length; i++) {
        //     var totalDifference = 0;
        //     for(var j = 0; j < friends[i].scores.length; j++) {
        //       var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        //       totalDifference += difference;
        //     }
      
        //     // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
        //     if(totalDifference < minimumDifference) {
        //       bestFriendIndex = i;
        //       minimumDifference = totalDifference;
        //     }
        //   }

        friends.push(newUser);
    });
}
