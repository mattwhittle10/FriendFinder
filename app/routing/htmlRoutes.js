var path = require("path");

module.exports = function(app){
    //inf information is entered in the survey then send that file instead.
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    //use the home.html as the default
    app.use(function(req, res) {
        res.sendFile(path.joint(__dirname, "/../public/home.html"));
    })
}