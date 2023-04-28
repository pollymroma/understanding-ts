function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
} // different types won't be allowed, only numbers

//const number1 = 5; //because you initialized it, it understands that it is a number
//let number1: number = 5; //is redundant, TS infers type from value
let number1: number; //is good practice because you don't assign the value when declaring it so it doesn't know what it is
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
