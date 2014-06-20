'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Assignment = mongoose.model('Assignment'),
    _ = require('lodash');


/**
 * Find assignment by id
 */
exports.assignment = function(req, res, next, id) {
    Assignment.load(id, function(err, assignment) {
        if (err) return next(err);
        if (!assignment) return next(new Error('Failed to load assignment ' + id));
        req.assignment = assignment;
        next();
    });
};

/**
 * Create an assignment
 */
exports.create = function(req, res) {
    var assignment = new Assignment(req.body);
    /*assignment.user = req.user;*/

    assignment.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                assignment: assignment
            });
        } else {
            res.jsonp(assignment);
        }
    });
};

/**
 * Update an assignment
 */
exports.update = function(req, res) {
    console.log("UPDATING RECORD..."+req);
    var assignment = req.assignment;

    assignment = _.extend(assignment, req.body);

    assignment.save(function(err) {
        console.log("UPDATING RECORD");
        if (err) {
            console.log("ERROR"+err.errors);
            /*return res.send('users/signup', {
                errors: err.errors,
                article: article
            });*/
        } else {
            res.jsonp(assignment);
        }
    });
};

/**
 * Delete an assignment
 */
exports.destroy = function(req, res) {

    var assignment = req.assignment;

    assignment.remove(function(err) {
        if (err) {
            console.log("Deleting Assignment");
            return res.send('users/signup', {
                errors: err.errors,
                assignment: assignment
            });
        } else {
            res.jsonp(assignment);
        }
    });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.jsonp(req.assignment);
};

/**
 * List of Assignment
 */
exports.all = function(req, res) {
    //console.log('Grtting All Assignment');
    Assignment.find().sort('-created').exec(function(err, assignment) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            //console.log(assignment);
            res.jsonp(assignment);
        }
    });
};
