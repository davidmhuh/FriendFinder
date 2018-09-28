var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        var match = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

      

        var userData = req.body;
        var userScores = userData.scores;

        var totalDifference = 0;


        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;

            for(var j = 0; j< friends[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDifference <= match.friendDifference) {

                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    match.friendDifference = totalDifference;
                }
            }
        }

        friends.push(userData);
        res.json(match)

    });
}