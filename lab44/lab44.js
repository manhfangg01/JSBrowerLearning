console.log("hello lab44");

const forIn = (object) => {
  for (let key in object) {
    console.log(key, object[key]);
  }
};

const forOf = (object) => {
  for (let value of Object.values(object)) {
    console.log(value);
  }
};

const sv1 = {
  name: "manh",
  score: 10,
};
const sv2 = {
  name: "fangg",
  score: 9,
};
const sv3 = {
  name: "phan",
  score: 99,
};

const person = {
  name: "manh",
  age: 25,
  address: "Binh Duong",
};

forIn(person);
forOf(person);
