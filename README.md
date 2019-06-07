# understreck

**Lightweight Javascript utility functions library without global dependency. Based on lodash.**

### Functions
**debounce**: See [lodash](http://lodash.com/docs/4.17.5#debounce)  
**defer**: See [lodash](http://lodash.com/docs/4.17.5#defer)  
**not**: See [lodash](http://lodash.com/docs/4.17.4#negate)  
**throttle**: See [lodash](http://lodash.com/docs/4.17.5#throttle)  
**wrap**: See [lodash](http://lodash.com/docs/4.17.5#wrap)

### Array
**difference**: See [lodash](http://lodash.com/docs/4.17.4#difference)  
**differenceBy**: See [lodash](http://lodash.com/docs/4.17.4#differenceBy)  
**distinct**: See [lodash](http://lodash.com/docs/4.17.4#uniq)  
**take**: See [lodash](http://lodash.com/docs/4.17.4#take)  
**union**: See [lodash](http://lodash.com/docs/4.17.4#union)  

### Object/Map
**extend**: See [lodash](http://lodash.com/docs/4.17.4#assignIn)  
**keys**: See [lodash](http://lodash.com/docs/4.17.4#keys)  
**merge**: See [lodash](http://lodash.com/docs/4.17.4#merge), but does not mutate objects.  
**omit**: See [lodash](http://lodash.com/docs/4.17.4#omit)  
**pick**: See [lodash](http://lodash.com/docs/4.17.4#pick)  
**size**: See [lodash](http://lodash.com/docs/4.17.4#size)  
**transform**: See [lodash](http://lodash.com/docs/4.17.4#transform)  
**values**: See [lodash](http://lodash.com/docs/4.17.4#values)  
**createMap**: [k1, v1, k2, v2, ...] Creates a map with the given key value pairs.

###  Collections
**clone**: See [lodash](http://lodash.com/docs/4.17.4#cloneDeep)  
**compact**: See [lodash](http://lodash.com/docs/4.17.4#compact)  
**find**: See [lodash](http://lodash.com/docs/4.17.4#find)  
**findIndex**: See [lodash](http://lodash.com/docs/4.17.4#findIndex)  
**flatten**: See [lodash](http://lodash.com/docs/4.17.4#flatten)  
**flattenDeep**: See [lodash](http://lodash.com/docs/4.17.4#flattenDeep)  
**filter**: [collection, predicate] Returns empty array if collection is undefined, otherwise filters collection using predicate.  
**forEach**: See [lodash](http://lodash.com/docs/4.17.4#forEach)  
**get**: See [lodash](http://lodash.com/docs/4.17.4#get)  
**includes**: See [lodash](http://lodash.com/docs/4.17.4#includes)  
**intersection**: See [lodash](http://lodash.com/docs/4.17.4#intersection)  
**keyBy**: See [lodash](http://lodash.com/docs/4.17.4#keyBy)  
**map**: See [lodash](http://lodash.com/docs/4.17.4#map)    
**reduce**: See [lodash](http://lodash.com/docs/4.17.4#reduce)  
**reduceRight**: See [lodash](http://lodash.com/docs/4.17.4#reduceRight)  
**reject**: See [lodash](http://lodash.com/docs/4.17.4#reject)  
**shuffle**: See [lodash](http://lodash.com/docs/4.17.4#shuffle)  
**some**: See [lodash](http://lodash.com/docs/4.17.4#some)  
**sortBy**: See [lodash](http://lodash.com/docs/4.17.4#sortBy)  
**unique**: See [lodash](http://lodash.com/docs/4.17.4#uniq)  
**containsValue**: \[collection, element\] Returns true if the collection has element as a value, otherwise false   
**containsKey**: \[collection, element\] Returns true if the collection has element as a key, otherwise false  

### Lang
**isArray**: See [lodash](http://lodash.com/docs/4.17.4#isArray)  
**isBoolean**: See [lodash](http://lodash.com/docs/4.17.4#isBoolean)  
**isDate**: See [lodash](http://lodash.com/docs/4.17.4#isDate)  
**isElement**: See [lodash](http://lodash.com/docs/4.17.4#isElement)  
**isEmpty**: See [lodash](http://lodash.com/docs/4.17.4#isEmpty)  
**isEqual**: See [lodash](http://lodash.com/docs/4.17.4#isEqual)  
**isFunction**: See [lodash](http://lodash.com/docs/4.17.4#isFunction)  
**isInteger**: See [lodash](http://lodash.com/docs/4.17.4#isInteger)  
**isNil**: See [lodash](http://lodash.com/docs/4.17.4#isNil)  
**isNull**: See [lodash](http://lodash.com/docs/4.17.4#isNull)  
**isNumber**: See [lodash](http://lodash.com/docs/4.17.4#isFinite)  
**isObject**: See [lodash](http://lodash.com/docs/4.17.4#isObject)  
**isRegExp**: See [lodash](http://lodash.com/docs/4.17.4#isRegExp)  
**isString**: See [lodash](http://lodash.com/docs/4.17.4#isString)  
**isUndefined**: See [lodash](http://lodash.com/docs/4.17.4#isUndefined)  
**parseNumber**  Parses the given string to a number. Will return `null` if invalid characters exist.

### Misc
**uniqueId**: \[*optional* prefix\] Returns a (hopefully) unique id, based on uuid principles.
