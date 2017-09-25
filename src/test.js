var _ = require('./understreck');

describe('Understreck', function () {
    it('extend', function () {
        var obj1 = {};
        var obj2 = {a: 1, b: 2};
        expect(_.extend(obj1, obj2)).toEqual({a: 1, b: 2});
        expect(obj1).toEqual({a: 1, b: 2});
    });

    it('uniqueId', function () {
        var id1 = _.uniqueId();
        var id2 = _.uniqueId();
        expect(id1).not.toEqual(id2);

        var id3 = _.uniqueId('prefix');
        var id4 = _.uniqueId('prefix');
        expect(id3).not.toEqual(id4);
    });
});