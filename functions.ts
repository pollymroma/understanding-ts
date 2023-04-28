function add(n1: number, n2: number): number {
  return n1 + n2;
} //TS infers the return type so it's not necessary to set it

function printResult(num: number) {
  //this returns void because we don't really return anything, it's just printing something
  console.log("Result: ", +num);
}

printResult(add(5, 12));

//In JS you can do:
//let combineValues;
//combineValues = add; //you set the add function in it
//console.log(combineValues(8, 8));

//let combineValues: Function; //what you store here is a function, not a value
//combineValues = add; //but you can set into it any function

let combineValues: (a: number, b: number) => number;
// This variable accepts ANY function that gets two number type parameters and returns a number

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
