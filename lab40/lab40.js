console.log("Hello lab40");

let scores = [10, 2, 3, 5, 0];

const showArray = (array) => {
  array.forEach((value, index) => console.log(`index: ${index} | value= ${value}`));
};

const doubleArray = (array) => array.map((value) => value * 2);

scores = doubleArray(scores);
showArray(scores);
