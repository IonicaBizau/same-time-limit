"use strict";

const sameTime = require("same-time")
    , limitIt = require("limit-it")
    ;

/**
 * sameTimeLimit
 * Runs async tasks in parallel but not more than a given limit in
 * the same time.
 *
 * @name sameTimeLimit
 * @function
 * @param {Array} tasks An array of async functions to call. Their first
 * parameter should be the callback function.
 * @param {Number} limit The max count of functions to run in parallel.
 * @param {Function} cb The callback function.
 * @param {Array} store An optional array to store the data in. If `null`, data won't be stored.
 * @returns {LimitIt} The `LimitIt` instance.
 */
module.exports = function sameTimeLimit(tasks, limit, cb, store) {
    let l = new limitIt(limit);
    sameTime(tasks.map(c => {
        return done => {
            l.add(c, done);
        };
    }), cb, store);
    return l;
};
