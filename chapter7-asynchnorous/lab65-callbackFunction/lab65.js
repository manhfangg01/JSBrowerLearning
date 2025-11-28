console.log("hello lab 65");

const introduce = (name, callback) => {
  console.log("My name is: ", name);
  callback();
};

const goodBye = () => console.log("Goodbye bro");
const greeting = () => console.log("Hello bro");

introduce("Manh", goodBye);
introduce("Manh", greeting);
