'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Assignment Schema
 */
var AssignmentSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    note: {
        type: String,
        default: '',
        trim: true
    }
});

/**
 * Validations
 */
AssignmentSchema.path('note').validate(function(note) {
    return note.length;
}, 'Note cannot be blank');

/**
 * Statics
 */
AssignmentSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Assignment', AssignmentSchema);
