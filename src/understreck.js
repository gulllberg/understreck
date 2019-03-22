var lodash = require('lodash');
var functions = {};

// Functions
functions.not = lodash.negate;

// Array
functions.difference = lodash.difference;
functions.distinct = lodash.uniq;

// Object / Map
functions.extend = lodash.extend;
functions.keys = lodash.keys;
functions.merge = lodash.merge;
functions.size = lodash.size;
functions.values = lodash.values;

functions.createMap = function () {
    var map = {};
    for (var i = 0; i < arguments.length; i += 2) {
        map[arguments[i]] = arguments[i + 1];
    }
    return map;
};

// Collections
functions.clone = lodash.cloneDeep;
functions.find = lodash.find;
functions.map = lodash.map;
functions.reject = lodash.reject;
functions.shuffle = lodash.shuffle;
functions.sortBy = lodash.sortBy;

functions.containsValue = function (collection, element) {
    if (collection.indexOf) {
        return collection.indexOf(element) !== -1;
    }
    else {
        return functions.containsValue(functions.values(collection), element);
    }
};
functions.containsKey = function (collection, element) {
    return functions.containsValue(Object.keys(collection), element);
};

// Lang
functions.isArray = lodash.isArray;
functions.isBoolean = lodash.isBoolean;
functions.isDate = lodash.isDate;
functions.isElement = lodash.isElement;
functions.isEmpty = lodash.isEmpty;
functions.isEqual = lodash.isEqual;
functions.isFunction = lodash.isFunction;
functions.isInteger = lodash.isInteger;
functions.isNumber = lodash.isFinite;
functions.isObject = lodash.isObject;
functions.isRegExp = lodash.isRegExp;
functions.isString = lodash.isString;
functions.isNil = lodash.isNil;

functions.parseNumber = function (number, radix) {
    if (functions.isString(number)) {
        if (/^((\d+\.\d*)|(\d*\.\d+))$/.test(number)) {
            return parseFloat(number);
        } else if (/^\d+$/.test(number)) {
            return parseInt(number, radix || 10);
        }
    } else {
        return number;
    }
    return null;
};

// Misc
function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(0, 4);
}

var guid = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
var counter = 0;
functions.uniqueId = function (prefix) {
    return prefix ? prefix + '_' + guid + '_' + counter++ : guid + '_' + counter++;
};
functions.isEqual = lodash.isEqual;

module.exports = functions;
