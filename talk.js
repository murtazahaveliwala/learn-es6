/**
 * Created by murtazahaveliwala on 04/05/18.
 */

/*********************************************
 *
 * Learn EcmaScript2015/ES6
 * ^^^^^^^^^^^^^^^^^^^^^^^^
 *
 * Reference: Understanding ECMAScript 6 (by Nicholas C. Zakas)
 * (https://leanpub.com/understandinges6/read/)
 *
 */


/**
 Session 1 - 4th May 2018

 Object and Array Destructuring
 ------------------------------
 */


/*
    Object and Array Literal
 */

// let options = {
//   repeat: true,
//   save: false
// };
//
// // extract data from the object
// let repeat = options.repeat,
//   save = options.save;
//
// let colors = ['red', 'green', 'blue'];
// let firstColor = colors[0],
//     secondColor = colors[1],
//     thirdColor = colors[2];















/*
    Object destructuring:
    - Helps make code concise and readable

    - Can be done at variable declarations or assignment expressions

    - Error when
      - Not assigning an object at declaration time
      - The object being assigned is null or undefined

    - In assignment expressions, wrapping the expression in parantheses is MANDATORY

    - Default values

    - Different names to variables

    - Nested objects can be destructured

 */













/*
    Destructuring at declaration
 */
// let data = {
//   type: "Identifier",
//   name: "foo"
// };
//
// let { type, name } = data;
//
// console.log(type);      // "Identifier"
// console.log(name);      // "foo"









/*
    - Caution: Do not forget to intialise along with the declaration. Otherwise it results in an error
 */

// // syntax error!
// var { type, name };
//
// // syntax error!
// let { type, name };
//
// // syntax error!
// const { type, name };
//
// // syntax error!
// var { type, name } = null;
//
// // syntax error!
// let { type, name } = null;
//
// // syntax error!
// const { type, name } = null;










/*
    Destructuring in assignment expressions
 */

// let data = {
//     type: "Identifier",
//     name: "foo"
//   },
//   type = "Literal",
//   name = 5;
//
// // *************  assign different values using destructuring
// // ***** Attention to the parantheses. They are MANDATORY.
// ({ type, name } = data);
//
// console.log(type);      // "Identifier"
// console.log(name);      // "foo"











/*
    Default values
    - can be used if the source object doesn't have value for the property
    - applied to only undefined values
 */

// let data = {
//   type: "Identifier",
//   name: "foo",
//   undefinedValue: undefined,
//   nullValue: null,
//   blankValue: '',
//   zeroValue: 0,
//   falseValue: false
// };
//
// let {
//   type,
//   name,
//   undefinedValue = 'default',
//   nullValue = 'default',
//   blankValue = 'default',
//   zeroValue = 'default',
//   falseValue = 'default'
// } = data;
//
// console.log(type);      // "Identifier"
// console.log(name);      // "foo"
// console.log(undefinedValue);     // default
// console.log(nullValue);     // null
// console.log(blankValue);     //
// console.log(zeroValue);     // 0
// console.log(falseValue);     // false















/*
    Assigning to different local names
 */

// let data = {
//   type: "Identifier",
//   name: "foo"
// };
//
// let { type: localType, name: localName } = data;
//
// console.log(localType);      // "Identifier"
// console.log(localName);      // "foo"















/*
    Using default values as well assigning under different name
 */

// let data = {
//   type: "Identifier"
// };
//
// let { type: localType, name: localName = "bar" } = data;
//
// console.log(localType);     // "Identifier"
// console.log(localName);     // "bar"



















/*
    Nested Object Destructuring
 */

// let node = {
//   type: "Identifier",
//   name: "foo",
//   loc: {
//     start: {                // <--
//       line: 1,
//       column: 1
//     },
//     end: {
//       line: 1,
//       column: 4             // <--
//     }
//   }
// };
//
// let { loc: { start, end: {column: endColumn}, property: localProperty = {value: 'foo'} }} = node;
//
// console.log(start.column);      // 1
// console.log(start.line);        // 1
// console.log(endColumn);      // 4
// console.log(localProperty.value);      // foo


















/*
    Careful: no variable declared. No Error too!
 */
// let { loc: {} } = node;






















/*
 Array destructuring:
 - Helps make code concise and readable

 - Can be done at variable declarations or assignment expressions

 - Error when
    - Not assigning an array at declaration time
    - The array being assigned is null or undefined

 - In assignment expressions, wrapping the expression in parantheses is NOT mandatory

 - Swapping

 - Default values

 - Different names to variables

 - Nested arrays can be destructured

 - Rest items
    - array cloning

 */



















/*
    Destructuring at declaration
 */
// let colors = [ "red", "green", "blue", "yellow" ];
//
// let [ firstColor, secondColor, , fourthColor ] = colors;
//
// console.log(firstColor);        // "red"
// console.log(secondColor);       // "green"
// console.log(fourthColor);       // "yellow"

















/*
    Application: easy swapping
 */

// let a = 1,
//   b = 2;
//
// [ a, b ] = [ b, a ];
//
// console.log(a);     // 2
// console.log(b);     // 1
















/*
    Default values
 */

// let colors = [ "red" ];
//
// let [ firstColor, secondColor = "green" ] = colors;
//
// console.log(firstColor);        // "red"
// console.log(secondColor);       // "green"






















/*
    Destructuring Nested Array
 */

// let colors = [ "red", [ "green", "lightgreen" ], "blue" ];
//
// let [ firstColor, [ secondColor ] ] = colors;
//
// console.log(firstColor);        // "red"
// console.log(secondColor);       // "green"



























/*
    Rest operator
        - captures all remaining items into another array
        - application: useful for get array subset
        - application: cloning an array
        - should ONLY appear in the end
 */

// let colors = [ "red", "green", "blue", "yellow" ];
//
// let [ firstColor, , ...restColors ] = colors;
//
// console.log(firstColor);        // "red"
// console.log(restColors.length); // 2
// console.log(restColors[0]);     // "blue"
// console.log(restColors[1]);     // "yellow"
















/*
    Cloning an array (with primitives)
 */

// cloning an array in ECMAScript 6
// let colors = [ "red", "green", "blue" ];
// let [ ...clonedColors ] = colors;        // <-- cloning with ...
//
// console.log(clonedColors);      // "[red,green,blue]"
//
// clonedColors[0] = "yellow";
//
// console.log(clonedColors);      // "[ 'yellow', 'green', 'blue' ]"
// console.log(colors);            // "[ 'red', 'green', 'blue' ]"













/*
    Cloning array (with non-primitives)
        - doesn't just copy reference but creates a shallow copy
 */
//
// let param = {foo: 'xyz'},
//   requestParams = [ param ],
//   [ ...clonedRequestParams ] = requestParams;
//
// console.log(clonedRequestParams);      // [ { foo: 'xyz' } ]
//
// clonedRequestParams[0] = {bar: 'abc'};
//
// console.log(clonedRequestParams);      // [ { bar: 'abc' } ]
// console.log(requestParams);            // [ { foo: 'xyz' } ]





















/*
    Cloning array (with non-primitives)
        - does SHALLOW copy
 */

// let param = {foo: 'xyz'},
//   requestParams = [ param ],
//   [ ...clonedRequestParams ] = requestParams;
//
// console.log(clonedRequestParams);      // [ { foo: 'xyz' } ]
//
// param.foo = 'abc';
//
// console.log(clonedRequestParams);      // [ { foo: 'abc' } ]
// console.log(requestParams);            // [ { foo: 'abc' } ]
//
//
// requestParams[0].foo = 'tuv';
//
// console.log(clonedRequestParams);      // [ { foo: 'tuv' } ]
// console.log(requestParams);            // [ { foo: 'tuv' } ]















/*
    Mixed destructuring
      - Using objects and arrays together
 */

// let data = {
//   type: "Identifier",
//   name: "foo",
//   loc: {
//     start: {
//       line: 1,
//       column: 1
//     },
//     end: {
//       line: 1,
//       column: 4
//     }
//   },
//   range: [0, 3]
// };
//
// let {
//   loc: { start },
//   range: [ startIndex ]
// } = data;
//
// console.log(start.line);      // 1
// console.log(start.column);    // 1
// console.log(startIndex);      // 0
















/*
    Application: function parameters
        - Increases readability. extra params clearly defined.
 */

// ************************** ES5
// properties on options represent additional parameters
// function setCookie(name, value, options) {
//
//   options = options || {};
//
//   let secure = options.secure,
//     path = options.path,
//     domain = options.domain,
//     expires = options.expires;
//
//   // code to set the cookie
// }
//
// // third argument maps to options
// setCookie("type", "js", {
//   secure: true,
//   expires: 60000
// });










// ************************** ES6
// function setCookie(name, value, { secure, path, domain, expires }) {
//
//   // code to set the cookie
// }
//
// setCookie("type", "js", {
//   secure: true,
//   expires: 60000
// });
//
// error!
// setCookie("type", "js");
//
// // Warning: destructured params cannot be sent null or undefined values















/*
    Ideal scenario
      - using default params and
      - default array destructure values
 */

// function setCookie(name, value,
//   {
//     secure = false,                            // <-- default destructuring value
//     path = "/",
//     domain = "example.com",
//     expires = new Date(Date.now() + 360000000)
//   } = {}                                       // <-- default param
// ) {
//
//   // empty
// }

// setCookie("type", "js");     // no error

