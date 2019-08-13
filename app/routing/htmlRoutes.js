var path = require("path");

module.exports = function(app){
    //information is entered in the survey then send that file instead.
    app.get("/app/public/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    //use the home.html as the default
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    })
}