const persons = [
  { name: "A", age: 22, gender: "female" },
  { name: "b", age: 21, gender: "male" },
  { name: "c", age: 23, gender: "male" },
  { name: "d", age: 24, gender: "female" },
  { name: "e", age: 25, gender: "male" },
];

const people = (person) => {
  return person.filter((p) => p.gender !== "female").map((p) => p.name);
};
console.log(people(persons));

//2
const books = [
  { title: "abc", author: "ldld", year: 2022 },
  { title: "bca", author: "ldld", year: 2008 },
  { title: "abcde", author: "ldld", year: 20243 },
  { title: "abcdef", author: "ldld", year: 2000 },
  { title: "abcdefg", author: "ldld", year: 2011 },
];

const book = (bookTitle) => {
  return bookTitle.map((bookTitle) => bookTitle.title);
};
console.log(book(books));

//3
const square = (num) => num * num;
const double = (num) => num * 2;
const addNum = (num) => num + 5;

const result = (num) => addNum(double(square(num)));

console.log(result(9));

//4
const cars = [
  { make: "A", model: "a", year: 2022 },
  { make: "B", model: "b", year: 2021 },
  { make: "A", model: "a", year: 2025 },
  { make: "A", model: "a", year: 2023 },
  { make: "A", model: "a", year: 2024 },
];

const getCars = (car) => {
  return car.sort((a, b) => a.year - b.year);
};
console.log(getCars(cars));

// 5
const friends = [
  { name: "riya", age: 28 },
  { name: "siha", age: 44 },
  { name: "jiha", age: 45 },
];

const changeAge = (arr, name, newAge) => {
  const person = arr.find((p) => p.find === name);
  if (person) {
    person.age = newAge;
  }
  return arr;
};

console.log(changeAge(friends, "riya", 38));

//6
const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 7, 8];
const sumEven = (arr) => {
  return arr.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
};
console.log(sumEven(numbers));

//7
const isLeapYear = (year) => {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
};

console.log(isLeapYear(2028));

//8
const numbers1 = [1, 2, 33, 44, 55, 55, 66, 77, 66, 99, 99];
function getUniqueValues(arr) {
  return [...new Set(arr)];
}

const uniqueNumbers = getUniqueValues(numbers1);
console.log(uniqueNumbers);

//9

const students = [
  { name: "miya", grades: [88, 76, 98] },
  { name: "siya", grades: [48, 67, 80] },
  { name: "liya", grades: [55, 77, 84] },
  { name: "biya", grades: [88, 97, 90] },
];

const getAverage = (grades) => {
  return grades.reduce((grades, sum) => grades + sum, 0) / grades.length;
};

const sortByAverageGrade = (students) => {
  return students.sort((a, b) => getAverage(b.grades) - getAverage(a.grades));
};
console.log(sortByAverageGrade(students));

//10
const products = [
  { quantity: 3, price: 40 },
  { quantity: 7, price: 80 },
  { quantity: 8, price: 50 },
  { quantity: 9, price: 70 },
  { quantity: 4, price: 60 },
  { quantity: 2, price: 400 },
];

const totalValues = (items) => {
  return items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
};
console.log(totalValues(products));
