# understreck

**Lightweight Javascript utility functions library without global dependency. Based on lodash.**

### Functions
**debounce**: See [lodash](http://lodash.com/docs/4.17.15#debounce)  
**defer**: See [lodash](http://lodash.com/docs/4.17.15#defer)  
**not**: See [lodash](http://lodash.com/docs/4.17.15#negate)  
**throttle**: See [lodash](http://lodash.com/docs/4.17.15#throttle)  
**wrap**: See [lodash](http://lodash.com/docs/4.17.15#wrap)

### Array
**difference**: See [lodash](http://lodash.com/docs/4.17.15#difference)  
**differenceBy**: See [lodash](http://lodash.com/docs/4.17.15#differenceBy)  
**distinct**: See [lodash](http://lodash.com/docs/4.17.15#uniq)  
**take**: See [lodash](http://lodash.com/docs/4.17.15#take)  
**union**: See [lodash](http://lodash.com/docs/4.17.15#union)  
**unique**: See [lodash](http://lodash.com/docs/4.17.15#uniq)  
**uniqueBy**: See [lodash](http://lodash.com/docs/4.17.15#uniqBy)  

### Object/Map
**extend**: See [lodash](http://lodash.com/docs/4.17.15#assignIn)  
**keys**: See [lodash](http://lodash.com/docs/4.17.15#keys)  
**merge**: See [lodash](http://lodash.com/docs/4.17.15#merge), but does not mutate objects.  
**omit**: See [lodash](http://lodash.com/docs/4.17.15#omit)  
**pick**: See [lodash](http://lodash.com/docs/4.17.15#pick)  
**size**: See [lodash](http://lodash.com/docs/4.17.15#size)  
**transform**: See [lodash](http://lodash.com/docs/4.17.15#transform)  
**values**: See [lodash](http://lodash.com/docs/4.17.15#values)  
**createMap**: [k1, v1, k2, v2, ...] Creates a map with the given key value pairs.

###  Collections
**clone**: See [lodash](http://lodash.com/docs/4.17.15#cloneDeep)  
**compact**: See [lodash](http://lodash.com/docs/4.17.15#compact)  
**find**: See [lodash](http://lodash.com/docs/4.17.15#find)  
**findIndex**: See [lodash](http://lodash.com/docs/4.17.15#findIndex)  
**flatten**: See [lodash](http://lodash.com/docs/4.17.15#flatten)  
**flattenDeep**: See [lodash](http://lodash.com/docs/4.17.15#flattenDeep)  
**filter**: [collection, predicate] Returns empty array if collection is undefined, otherwise filters collection using predicate.  
**forEach**: See [lodash](http://lodash.com/docs/4.17.15#forEach)  
**get**: See [lodash](http://lodash.com/docs/4.17.15#get)  
**includes**: See [lodash](http://lodash.com/docs/4.17.15#includes)  
**intersection**: See [lodash](http://lodash.com/docs/4.17.15#intersection)  
**keyBy**: See [lodash](http://lodash.com/docs/4.17.15#keyBy)  
**map**: See [lodash](http://lodash.com/docs/4.17.15#map)    
**reduce**: See [lodash](http://lodash.com/docs/4.17.15#reduce)  
**reduceRight**: See [lodash](http://lodash.com/docs/4.17.15#reduceRight)  
**reject**: See [lodash](http://lodash.com/docs/4.17.15#reject)  
**shuffle**: See [lodash](http://lodash.com/docs/4.17.15#shuffle)  
**some**: See [lodash](http://lodash.com/docs/4.17.15#some)  
**sortBy**: See [lodash](http://lodash.com/docs/4.17.15#sortBy)  
**containsValue**: \[collection, element\] Returns true if the collection has element as a value, otherwise false   
**containsKey**: \[collection, element\] Returns true if the collection has element as a key, otherwise false  

### Lang
**isArray**: See [lodash](http://lodash.com/docs/4.17.15#isArray)  
**isBoolean**: See [lodash](http://lodash.com/docs/4.17.15#isBoolean)  
**isDate**: See [lodash](http://lodash.com/docs/4.17.15#isDate)  
**isElement**: See [lodash](http://lodash.com/docs/4.17.15#isElement)  
**isEmpty**: See [lodash](http://lodash.com/docs/4.17.15#isEmpty)  
**isEqual**: See [lodash](http://lodash.com/docs/4.17.15#isEqual)  
**isFunction**: See [lodash](http://lodash.com/docs/4.17.15#isFunction)  
**isInteger**: See [lodash](http://lodash.com/docs/4.17.15#isInteger)  
**isNil**: See [lodash](http://lodash.com/docs/4.17.15#isNil)  
**isNull**: See [lodash](http://lodash.com/docs/4.17.15#isNull)  
**isNumber**: See [lodash](http://lodash.com/docs/4.17.15#isFinite)  
**isObject**: See [lodash](http://lodash.com/docs/4.17.15#isObject)  
**isRegExp**: See [lodash](http://lodash.com/docs/4.17.15#isRegExp)  
**isString**: See [lodash](http://lodash.com/docs/4.17.15#isString)  
**isUndefined**: See [lodash](http://lodash.com/docs/4.17.15#isUndefined)  
**parseNumber**  Parses the given string to a number. Will return `null` if invalid characters exist.

### Misc
**uniqueId**: \[*optional* prefix\] Returns a (hopefully) unique id, based on uuid principles.
