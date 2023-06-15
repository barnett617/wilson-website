```js
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
for (const key in an_obj) {
  if (an_obj.hasOwnProperty(key)) {
    const element = an_obj[key];
    console.log('key: ' + key);
    console.log('value: ' + element);
  }
}

// key: 2
// value: b
// key: 7
// value: c
// key: 100
// value: a

console.log(Object.keys(an_obj))
console.log(Object.values(an_obj))
console.log(Object.entries(an_obj))

// [ '2', '7', '100' ]
// [ 'b', 'c', 'a' ]
// [ [ '2', 'b' ], [ '7', 'c' ], [ '100', 'a' ] ]

console.log('abc'.padStart(10));         // "       abc"
console.log('abc'.padStart(10, "foo"));  // "foofoofabc"
console.log('abc'.padStart(6,"123465")); // "123abc"
console.log('abc'.padStart(8, "0"));     // "00000abc"
console.log('abc'.padStart(1));          // "abc"

'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"

'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"

"abc".repeat(-1)     // RangeError: repeat count must be positive and less than inifinity
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
"abc".repeat(3.5)    // "abcabcabc" 参数count将会被自动转换成整数.
"abc".repeat(1/0)    // RangeError: repeat count must be positive and less than inifinity


// abc
// foofoofabc
// 123abc
// 00000abc
// abc
```