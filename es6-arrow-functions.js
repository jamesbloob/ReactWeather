// var names = ['Jimbob', 'Andrew', 'Mike', 'John'];
//
// names.forEach(function(name){
//   console.log('for each: ', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Jimbob'));

// // Using an anonymous function
// var person = {
//   name: 'Jimbob',
//   greet: function(){
//     names.forEach(function(name){
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
// person.greet();
//
// // Using an arrow function
// var person = {
//   name: 'Jimbob',
//   greeter: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
// person.greeter();

// Challenge Area
function add(a,b){
  return a + b;
}
console.log(add(2,5));

// addStatement
var addStatement = (a,b) => {
  return a + b;
}
console.log(addStatement(5,5));

// addExpression
var addExpression = (a,b) => a + b;
console.log(addExpression(6,6));
