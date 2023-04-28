// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   // we declare explicitly because inferring doesn't work perfectly with the tuple
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple!
// } = {
//   //TS infers the type, knows that the object has a key name string and a key age number
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"], //this infers type of array string
//   role: [2, "author"], //a tuple, of always two elements, one a number and the other a string
// };

//person.role.push("admin"); //this one works because push is allowd in tuples so we can't catch this error
//person.role[1] = 10; //with the tuple definition, this won't work
//TS only knows that role can be of type number or string, doesn't realize the order
//So you'd need to make it explicity
//person.role = []; //not allowed because it's empty and not the proper length
//person.role = [0, 'admin', 'user]; //same with something with three values because we declared that it has to be two

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  //TS infers the type, knows that the object has a key name string and a key age number
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: string[]; //explicitly tells TS that it is an array of strings
//favoriteActivities = ['Sports', 1] //not allowed, mixed array
//but if you declare it is any[] it will allow you flexibility (but you lose the benefits of type that TS offers)
favoriteActivities = ["Sports"];
//console.log(person.nickname); //a property that doesn't exist
console.log(person.name);
//It infers that the type of person object has a key name with type string and an age key with type number

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); //you can do the uppercase because TS inferred that one hobby from an array of strings will be a string
}
