module.exports = function(app){

    app.get('/', function(req, res){
        res.render("templates/index");
    });

    app.get('/signup', function(req, res){



    });

    app.post('/createacc', function(req, res){
       //TODO: Form will create to this account;
    });

};