// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try{
  let res = sum(null);
  console.log(res);
}
catch (error){
  if(error instanceof TypeError){
    console.error("Input must be array type")
  }
}

// 2.
// tests

function sayName(name){
  if(typeof name !== "string"){
    throw new Error("Must be a string");
  }
  console.log(name);
}

try{
  sayName("Alex");
  sayName(1);
}
catch(error){
  console.error(error.name + ": " + error.message);
}



// // 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try{
  greet()
}
catch(error){

  console.log("Hello World!");

}

