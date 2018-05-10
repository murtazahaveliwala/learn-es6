/**
 * Created by murtazahaveliwala on 10/05/18.
 */

/*********************************************
 *
 *        Learn EcmaScript2015/ES6
 *        ========================
 *
 * Reference: Understanding ECMAScript 6 (by Nicholas C. Zakas)
 * (https://leanpub.com/understandinges6/read/#leanpub-auto-block-bindings)
 *
 */


/**
 Session 2 - 10th May 2018

    Block Bindings
    --------------

 */


/*
  - In C-based languages, traditional variables created on the spot where declaration occurs

  - In JS, variable creation location depends on keyword used to declare a variable

  - ES6 gives more option in controlling the scope of variable - let & const
 */

















/*
  Hoisting
 */

/* coded as per programmer */
//
// function getValue(condition) {
//
//   if (condition) {
//     var value = "blue";
//
//     console.log(value);
//   } else {
//
//     console.log(value);
//   }
//
//   console.log(value);
// }
//
// getValue(true);
// getValue(false);












/* output */
// getValue(true);    // "blue"
//                    // "blue"
// getValue(false);   // undefined
//                    // undefined















/* code as seen by JS engine */

// function getValue(condition) {
//
//   var value;
//
//   if (condition) {
//     value = "blue";
//
//     console.log(value);
//   } else {
//
//     console.log(value);
//   }
//
//   console.log(value);
// }

// getValue(true);    // "blue"
//                    // "blue"
// getValue(false);   // undefined
//                    // undefined











/*
  Block-level declarations

  - Like C-based languages
  - These declarations are inaccessible outside a block scope
  - Block level scope created at following places
    - Inside a function
    - Inside a block `{` and `}`

 */



















/*
    `let` Declarations

    - decalration
      - 'let' keyword
      - value maybe assigned or not assigned
      - value can be reassigned

    - Variable scope is only inside the block of declaration - function or between { and }

    - NO hoisting
 */

// function getValue(condition) {
//
//   if (condition) {
//     let value = "blue";
//
//     console.log(value);
//   } else {
//
//     console.log(value);
//   }
//
//   // console.log(value)
// }
//
// // getValue(true);      // "blue"
// // getValue(false);     // error! (ReferenceError: value is not defined)












/*
    NO Redeclaration
    - once a binding is created, let wouldn't create a new binding with same name
    - allowed if a binding is created in a scope and also in child scope with same name
      - in the child scope, access to parent scope binding, with same name, is blocked
 */




// redeclaration allowed for vars
// var count = 30;
//
// var count = 40;
//
// console.log(count);     // 40







// // redeclaration NOT allowed for var and let using same binding name
//
// var count = 30;
//
// // throws an error  (SyntaxError: Identifier 'count' has already been declared)
// let count = 40;











// binding creation in a scope and child scope
//
// let count = 30;
//
// if (true) {
//
//   // doesn't throw an error
//   // NOTE: parent scope's `count` access is blocked
//   let count = 40;
//
//   console.log(count);   // 40
// }
//
// console.log(count);     // 30















/*
    `const` Declarations

    - decalration
      - `const' keyword
      - value has to be assigned at declaration, otherwise a syntax error
      - values once assigned CANNOT be changed
      - is NOT hoisted
      - when assigning objects, the object may be modified but no reassiging to another object

    - NO redeclaration
      - a const binding for a name cannot be created if decalaration of the same is done before
      - a const binding doesn't exist outside it's scope - block or between `{` and `}`
      - NO reassiging
 */


// // valid constant
// const maxItems = 30;
//
// // syntax error: missing initialization
// const name;          // <--







// if (true) {
//   const itemsCount = 5;
//
//   // more code
// }
//
// // itemsCount isn't accessible here









// var message = "Hello!";
// let age = 25;
//
// // each of these throws an error
// const message = "Goodbye!";
// const age = 30;










// const maxItems = 5;
//
// // throws an error
// maxItems = 6;












/* NOTE: object assignment to a const */
// const person = {
//   name: "Nicholas"
// };
//
// // works
// person.name = "Greg";
//
// // throws an error
// person = {
//   name: "Greg"
// };













/*
  TDZ

  - Temporal Dead Zone (Not named as such in spec but a community given term)
  - binding declaration using let or const cannot be accessed (even with safe typeof operator) until declaration in the block
    - throws error
  - The location from block start until the binding declaration is known as TDZ

  - same goes for `const` but not for `var`


 */
// console.log(typeof foo);
//
// if (true) {
//   console.log(typeof foo);    // error! in TDZ     (ReferenceError: foo is not defined)
//
//   let foo = 'bar';
// }









/*
    Block bindings in loops

    -
 */

/*  Loop variable using `var` - var is hoisted */
// function process(item) {}
//
// for (var i = 0; i < 10; i++) {
//   process(items[i]);
// }
//
// // i is still accessible here
// console.log(i);       // 10








/*  Loop variable using `let` - var is NOT hoisted */
// function process(item) {}
//
// for (let i = 0; i < 10; i++) {
//   process(items[i]);
// }
//
// // i is not accessible here - throws an error
// console.log(i);













/* functions in loops - classic problem */

// program to output numbers 0 to 9 using nested functions
// WARNING - doesn't work and ends up printing 10 ten times
// var funcs = [];
//
// for (var i = 0; i < 10; i++) {
//   funcs.push(function() {
//     console.log(i);
//   });
// }
//
// funcs.forEach(function(func) {
//   func();     // outputs the number "10" ten times
// });








// Correction using function.bind
// var funcs = [];
//
// for (var i = 0; i < 10; i++) {
//   funcs.push(function(value) {
//       console.log(value);
//     }.bind(null, i)
//   );
// }
//
// funcs.forEach(function(func) {
//   func();     // outputs 0, then 1, then 2, up to 9
// });










/*
    `let` declarations inside loops

    1. A new variable of `i` is created for every cycle
    2. value of `i` as per the beginning of the loop
    3. same name as previous execution
    4. same execution for for-in and for-of loop

    5. behaves the SAME for for-in and for-of loops
 */

// var funcs = [];
//
// for (let i = 0; i < 10; i++) {
//   funcs.push(function() {
//     console.log(i);
//   });
// }
//
// funcs.forEach(function(func) {
//   func();     // outputs 0, then 1, then 2, up to 9
// })







// Similarly for for-in and for-of loops
// var funcs = [],
//   object = {
//     a: true,
//     b: true,
//     c: true
//   };
//
// for (let key in object) {
//   funcs.push(function() {
//     console.log(key);
//   });
// }
//
// funcs.forEach(function(func) {
//   func();     // outputs "a", then "b", then "c"
// });












/*
    `const` declarations inside loops

     - declarations behave differently in different loops

     `for` loop
        - No new copy is created
        - Error is thrown if the const counter is incremented/decremented
        - Use of const bindings is allowed as long as its not modified

     `for-of` and `for-in` loop
        - behaves like a let declaration
        - new copy or binding with same name and new value is created on each iteration
        - the const-binding should NOT be modified inside the loop
 */





/* `const` and `for` loop */
// var funcs = [];
//
// // throws an error after first iteration
// // (TypeError: Assignment to constant variable.)
// for (const i = 0; i < 10; i++) {
//   funcs.push(function() {
//     console.log(i);
//   });
// }









/* `const` and `for-in` loop. same for `for-of` loop */

// var funcs = [],
//   object = {
//     a: true,
//     b: true,
//     c: true
//   };
//
// // doesn't cause an error
// for (const key in object) {
//   funcs.push(function() {
//     console.log(key);
//   });
// }
//
// funcs.forEach(function(func) {
//   func();     // outputs "a", then "b", then "c"
// });













/*
    Global block bindings

    - For `var` decalred in global scope
      1. a global variable is created
      2. the variable is exposed as a property on global object (window or global)
        - overwrites previous value if the binding with same name already exists on global/window
      3. the global var and the global property point to same variable
          - thus any modification of one leads to another being updated



    - For 'let' or  'const' declared in global scope
      1. a global variable is created
      2. NO exposure to global/window object
      3. Doesn't overwrite global/window property with same name if one already exists

    - `let` and `const` are safer in accidental overwritting is to be avoided

    - however, for sharing bindings between frames and windows, `var` should be used
 */


/* `var` in a browser */
// var RegExp = "Hello!";
// console.log(window.RegExp);    // "Hello!"
//
// var ncz = "Hi!";
// console.log(window.ncz);       // "Hi!"










/* `let` and `const` in browser */
// in a browser
// let RegExp = "Hello!";
// console.log(RegExp);                    // "Hello!"
// console.log(window.RegExp === RegExp);  // false
//
// const ncz = "Hi!";
// console.log(ncz);                       // "Hi!"
// console.log("ncz" in window);           // false


















/*
  Emerging best practices for using `let` Vs `const`

  - Best to use const as DEFAULT declaration type as most bindings dont need to mutate
    - this helps in prevent accidental modifications and related errors
    - provides a basic level of immutability
 */
