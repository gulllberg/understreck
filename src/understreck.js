var lodash = require('lodash');
var functions = {};

// Collections
functions.find = lodash.find;
functions.reject = lodash.reject;

// Object
functions.extend = lodash.extend;
functions.values = lodash.values;
functions.keys = lodash.keys;
functions.size = lodash.size;

// Misc
function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(0, 4);
}

var guid = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
var counter = 0;
functions.uniqueId = function (prefix) {
    return prefix ? prefix + '_' + guid + '_' + counter++ : guid + '_' + counter++;
};

module.exports = functions;