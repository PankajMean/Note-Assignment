'use strict';

var assignment = require('../controllers/assignment');

// The Package is past automatically as first parameter
module.exports = function(Assignment, app, auth, database) {


    /*app.post('/assignment', function(req, res, next) {
        res.send('Data Saved');
    });*/

    app.route('/assignment')
        .get(assignment.all)
        .post(assignment.create);
    app.route('/assignment/:assignmentId')
        .get(assignment.show)
        .put(assignment.update)
        .delete(assignment.destroy);

    app.param('assignmentId', assignment.assignment);

 /*   app.get('/assignment/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/assignment/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/assignment/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/assignment/example/render', function(req, res, next) {
        Assignment.render('index', {
            package: 'assignment'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });*/
};


/*module.exports = function(Articles, app, auth) {


    app.route('/articles/:articleId')
        .get(articles.show)
        .put(auth.requiresLogin, hasAuthorization, articles.update)
        .delete(auth.requiresLogin, hasAuthorization, articles.destroy);

    // Finish with setting up the articleId param
    app.param('articleId', articles.article);*/
