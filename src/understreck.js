var lodash = require('lodash');
var functions = {};

// Functions
functions.debounce = lodash.debounce;
functions.defer = lodash.defer;
functions.not = lodash.negate;
functions.throttle = lodash.throttle;
functions.wrap = lodash.wrap;

// Array
functions.difference = lodash.difference;
functions.differenceBy = lodash.differenceBy;
functions.distinct = lodash.uniq;
functions.take = lodash.take;
functions.union = lodash.union;
functions.unique = lodash.uniq;
functions.uniqueBy = lodash.uniqBy;

// Object / Map
functions.extend = lodash.extend;
functions.get = lodash.get;
functions.keys = lodash.keys;
functions.merge = function () {
    var args = Array.prototype.slice.call(arguments);
    return lodash.merge.apply(null, [{}].concat(args));
};
functions.omit = lodash.omit;
functions.pick = lodash.pick;
functions.size = lodash.size;
functions.transform = lodash.transform;
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
functions.compact = lodash.compact;
functions.find = lodash.find;
functions.findIndex = lodash.findIndex;
functions.flatten = lodash.flatten;
functions.flattenDeep = lodash.flattenDeep;
functions.forEach = lodash.forEach;
functions.includes = lodash.includes;
functions.intersection = lodash.intersection;
functions.keyBy = lodash.keyBy;
functions.map = lodash.map;
functions.reduce = lodash.reduce;
functions.reduceRight = lodash.reduceRight;
functions.reject = lodash.reject;
functions.shuffle = lodash.shuffle;
functions.some = lodash.some;
functions.sortBy = lodash.sortBy;

functions.filter = function (collection, predicate) {
    if (collection === undefined) {
        return [];
    }
    return collection.filter(predicate);
};

functions.containsValue = function (collection, element) {
    if (collection.indexOf) {
        return collection.indexOf(element) !== -1;
    } else {
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
functions.isNil = lodash.isNil;
functions.isNull = lodash.isNull;
functions.isNumber = lodash.isFinite;
functions.isObject = lodash.isObject;
functions.isRegExp = lodash.isRegExp;
functions.isString = lodash.isString;
functions.isUndefined = lodash.isUndefined;

functions.parseNumber = function (value, radix) {
    if (functions.isString(value)) {
        if (/^((\d+\.\d*)|(\d*\.\d+))$/.test(value)) {
            return parseFloat(value);
        } else if (/^\d+$/.test(value)) {
            return parseInt(value, radix || 10);
        } else {
            return null;
        }
    } else if (functions.isNumber(value)) {
        return value;
    } else {
        return null;
    }
};

// Misc
function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(0, 4);
}

var guid = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
var counter = 0;
functions.uniqueId = function (prefix) {
    return (prefix ? prefix + '_' + guid + '_' + counter++ : guid + '_' + counter++) + '_';
};

module.exports = functions;
