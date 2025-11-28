console.log("hello lab 41");

const num = [1, 2, 3, 4, 6, 7, 8, 110, 27];

const showArray = (array) => {
  array.forEach((value, index) => console.log(`index: ${index} | value= ${value}`));
};

const evenArray = num.filter((value) => value % 2 == 0);

showArray(evenArray);
