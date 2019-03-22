var _ = require('./understreck');

describe('Understreck - Function', function () {
    it('not', function () {
        function isEven(v) {
            return v % 2 === 0;
        }

        var isOdd = _.not(isEven);

        expect(isEven(2)).toEqual(true);
        expect(isOdd(2)).toEqual(false);
        expect(isOdd(1)).toEqual(true);
        expect(_.not(isOdd)(1)).toEqual(false);
        expect(_.not(isOdd)(2)).toEqual(true);
    })
});

describe('Understreck - Array', function () {
    it('difference', function () {
        expect(_.difference([1, 2, 3], [1], [2])).toEqual([3]);
    });

    it('distinct', function () {
        expect(_.distinct([1, 1, 3])).toEqual([1, 3]);
    });
});

describe('Understreck - Object/Map', function () {
    it('extend', function () {
        var obj1 = {};
        var obj2 = {a: 1, b: 2};
        expect(_.extend(obj1, obj2)).toEqual({a: 1, b: 2});
        expect(obj1).toEqual({a: 1, b: 2});
    });

    it('createMap', function () {
        var obj1 = _.createMap("foo", 123, "bar", 987);
        expect(obj1).toEqual({"foo": 123, "bar": 987});
    });
});

describe('Understreck - Collections', function () {
    it('clone', function () {
        var a = [{korv: "paj"}];
        var b = _.clone(a);

        b[0].korv = "fisk";

        expect(a[0].korv).toEqual("paj");
    });

    it('containsValue', function () {
        var list = [1, 2, 3];
        expect(_.containsValue(list, 3)).toEqual(true);
        expect(_.containsValue(list, 4)).toEqual(false);

        var object = {a: 1, b: 2};
        expect(_.containsValue(object, 2)).toEqual(true);
        expect(_.containsValue(object, 3)).toEqual(false);
        expect(_.containsValue(object, 'a')).toEqual(false);
    });

    it('containsKey', function () {
        var object = {a: 1, b: 2};
        expect(_.containsKey(object, 'a')).toEqual(true);
        expect(_.containsKey(object, 'c')).toEqual(false);
        expect(_.containsKey(object, 1)).toEqual(false);

        var list = [10, 11, 12];
        expect(_.containsKey(list, "1")).toEqual(true);
        expect(_.containsKey(list, 5)).toEqual(false);
        expect(_.containsKey(list, 11)).toEqual(false);
        expect(_.containsKey(list, 1)).toEqual(false);
    });
});

describe('Understreck - Misc', function () {
    it('uniqueId', function () {
        var id1 = _.uniqueId();
        var id2 = _.uniqueId();
        expect(id1).not.toEqual(id2);

        var id3 = _.uniqueId('prefix');
        var id4 = _.uniqueId('prefix');
        expect(id3).not.toEqual(id4);
    });
});

describe('Lang', function () {
    it('parseNumber', function () {
        expect(_.parseNumber('123')).toEqual(123);
        expect(_.parseNumber(123)).toEqual(123);
        expect(_.parseNumber(123.412)).toEqual(123.412);
        expect(_.parseNumber('123.412')).toEqual(123.412);
        expect(_.parseNumber('123,412')).toEqual(null);
        expect(_.parseNumber('1a23,412')).toEqual(null);
        expect(_.parseNumber('1a23')).toEqual(null);
        expect(_.parseNumber('')).toEqual(null);
        expect(_.parseNumber('awdaw')).toEqual(null);
        expect(_.parseNumber(true)).toEqual(null);
        expect(_.parseNumber(NaN)).toEqual(null);

    });
});