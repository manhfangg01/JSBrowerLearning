const names = ["hoidanit", "manhfen", "javascript", "nodejs"];

// fetch
console.log(`index 0: ${names[0]}`);
console.log(`index 0: ${names[1]}`);

// edit
names[3] = "java";
console.log("before", names);

// add
names.push(true, 123); // Thêm đầu
names.unshift(null); // Thêm cuối

// remove
lastElement = names.pop(); // Xóa và trả về giá trị cuối
firstElement = names.shift(); // Xóa và trả về giá trị đầu

console.log(`after ${names}`);
