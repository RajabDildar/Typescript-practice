var myName = "rajab";
var age = 18;
var isStudent = true;
var data = "hello";
var rating = 100;
console.log(myName);
console.log(age);
console.log(isStudent);
console.log(data);
console.log(rating);
// arrays
var evenNumbers = [2, 4, 6, 8, 10];
console.log(evenNumbers);
var stu1 = ["rajab", 18, true]; //by default, the array return type is any.
console.log(stu1);
// tuples
var arr2 = ["rajab", 18];
console.log(arr2);
// objects
var user1 = {
    name: "Ahmed",
    age: 23,
    gender: "male",
};
console.log(user1);
var user2 = {
    name: "Ahmed",
    age: 23,
};
console.log(user2);
var user3 = {
    name: "Ali",
    age: 22,
    gender: "male",
};
console.log(user3);
// functions
function add(a, b) {
    return a + b;
}
console.log(add(10, 10));
function greet(name, greeting) {
    var g = "".concat(greeting || "Hello", " ").concat(name, "!");
    console.log(g);
}
greet("Shan");
greet("Ahmad", "Hope you are fine,");
var greetWithHello = function (name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    var g = "".concat(greeting, " ").concat(name, "!");
    return g;
};
console.log(greetWithHello("zubair"));
console.log(greetWithHello("zubair", "How are you? "));
// accepting call backs in functions
function sayHello(name, cb) {
    console.log("hello ".concat(name));
    cb(name);
}
function sayHi(name) {
    console.log("hi ".concat(name));
}
sayHello("rajab", sayHi);
// rest/spread in functions
function sum() {
    var vals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vals[_i] = arguments[_i];
    }
    console.log(vals);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// // Generics
// const getFirst = <A>(arr: A[]): A => {
//   return arr[0];
// };
// console.log(getFirst([1, 2, 3, 4, 5]));
// console.log(getFirst(["a", "b", "c", "d", "e"]));
// console.log(getFirst<string>(["a", "b", "c", "d", "e"]));
// enums
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["ABANDONED"] = 500] = "ABANDONED";
    StatusCodes[StatusCodes["NOTFOUND"] = 404] = "NOTFOUND";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.ABANDONED);
console.log(StatusCodes.NOTFOUND);
