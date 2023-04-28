type Combinable = number | string; // you store a union so that you don't have to write it each time
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  //resultConversion: string
  resultConversion: ConversionDescriptor //a literal! you allow only any of those two values
) {
  // if you want a function that works with numbers and strings
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2; //+ in front of data converts converts to number
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Max", "Ana", "as-text");

const combinedStringAges = combine("30", "26", "as-number");

type Product = { title: string; price: number };
//const p1: Product = { title: "A book", price: 12.99, isListed: true }; // this throws error because we declared an objec literal so it must have the same amount of values
