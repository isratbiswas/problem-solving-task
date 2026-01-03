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
