// for (let i = 0; i < 10; i++){
//   if (i === 4 ){
//     console.log(`${i} is my favourite number`)
//     continue;
//   }
//   console.log(`The number is currently ${i}`);
// }

//   let i = 0;

// while (i < 10) {
//   console.log(`Number is ${i}`);
//   i++;
// } 


// Looping through ARRAYS
// forEach

// let cars = ['Toyota', 'Mustang', 'Fiat', 'Audi' ];

// cars.forEach(function (element, index) {
//   console.log(`Car is ${element} at position ${index} of array`);
// })


// Map function

const users = [
  {id : 0, firstName : 'Denis', lastName : 'Murray'},
  {id : 1, firstName : 'John', lastName : 'O Shea'},
  {id : 2, firstName : 'Seamus', lastName : 'Gimbo'},
  {id : 3, firstName : 'Mags', lastName : 'Larkin'}
];

// users.forEach(function getUserInfo(user, index) {
//   //console.log(user);
//   let tempUserName = `${user.firstName} ${user.lastName}`;
//   let tempID = `${user.id}`;
//   console.log(`User: ${tempUserName} has ID: ${tempID}`);
// })

const userNames = users.map(function(user) {
  let tempUserName = `${user.firstName} ${user.lastName}`;
  return tempUserName;
});

console.log(userNames);