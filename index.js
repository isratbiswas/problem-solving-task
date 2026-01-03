// Task-1

const people = [
  { name: "Ali", age: 3, gender: "male" },
  { name: "Nabihah", age: 8, gender: "female" },
  { name: "Rafi", age: 4, gender: "male" },
  { name: "Liza", age: 38, gender: "female" },
  { name: "Borna", age: 37, gender: "female" },
  { name: "Riya", age: 23, gender: "female" },
  { name: "Washir", age: 12, gender: "male" },
];

const getMales = (arr) => {
  return arr
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

console.log(getMales(people));

//Task -2

const books = [
  { title: "ABC", author: "ali", year: 2022 },
  { title: "BCA", author: "ali", year: 2022 },
  { title: "BBA", author: "ali", year: 2022 },
  { title: "CCA", author: "ali", year: 2022 },
  { title: "CCD", author: "ali", year: 2022 },
];

const getBookTitle = (books) => {
  return books.map((book) => book.title);
};

console.log(getBookTitle(books));

//Task -3

const square = (number) => number * number;
const double = (number) => number * 2;
const addNumber = (number) => number + 5;

const composedFunction = (number) => addNumber(double(square(number)));

console.log(composedFunction(9));

// Task -4
const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "BMW", model: "X5", year: 2020 },
];

const getCars = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};
console.log(getCars(cars));

//task-5

const persons = [
  { name: "Sabiha", age: 27 },
  { name: "Rihana", age: 33 },
  { name: "Hazera", age: 32 },
];

const updateAge = (arr, name, newAge) => {
  const person = arr.find((p) => p.name === name);
  if (person) {
    person.age = newAge;
  }
  return arr;
};

console.log(updateAge(persons, "Rihana", 40));
