// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  //TS infers the type, knows that the object has a key name string and a key age number
  name: "Maximilian",
  age: 30,
};

console.log(person.nickname); //a property that doesn't exist
//It infers that the type of person object has a key name with type string and an age key with type number
