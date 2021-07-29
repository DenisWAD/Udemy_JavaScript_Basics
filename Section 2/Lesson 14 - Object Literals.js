let dog = {};
let val;

let date =  new Date().getFullYear();
//console.log(date);

dog = {
  eyes : 2,
  tail : true,
  colour : 'brown',
  intelligence : 6
}


// val = dog.eyes;
// // Alternative 
// val = dog['colour'];

// console.log(val);

let person = {
  firstName : 'Denis',
  lastName : 'Murray',
  age : 26,
  address : {
    firstLine : 'Ashford',
    county : 'Limerick'
  },
  getDOB : function() {
    return (date - this.age);
  }
};

val = person.getDOB();

console.count(val);