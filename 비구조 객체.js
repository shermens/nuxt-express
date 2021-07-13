let foo = {a: 1, b: null};
let {a, b, c = 10} = foo;

console.log(a);
console.log(b);
console.log(c);
