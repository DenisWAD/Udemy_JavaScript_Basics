// function getName(firstName, lastName) {
//   return `Hello my name is ${firstName} ${lastName}`;
// }

// console.log(getName('Denis', 'Murray'));



// Immediately Invokable Function Expressions (IIFE's) !!!!!!!!!!!!!!!!!
(function(name){
  console.log(`Hi my name is ${name}`);
})('Denis Murray');