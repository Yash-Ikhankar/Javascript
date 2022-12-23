// function User(name, email, age) {
//   this.name = name;
//   this.email = email;
//   this.age = age;
//   // Methods Added
//   this.login = function () {
//     console.log(this.email, "Has Loggged IN");
//   };
// }

// let userOne = new User("yash", "yashikhankar@gmail.com", 27);
// let userTwo = new User("Dhruv", "dhruvikhankar@gmail.com", 22);

// console.log(userOne);
// console.log(userTwo);

// Every Method in object is by default under Prototype . But the way the method is created in the above example is puting it outSide of ProtoTYpe . We have to find a way to put it in Prototype

// *** ProToType ***

function User(name, email, age) {
  this.name = name;
  this.email = email;
  this.age = age;
  //  Previous Methods Added
  // this.login = function () {
  //   console.log(this.email, "Has Loggged IN");
  // };
}

// Adding Mehod using ProtoType
User.prototype.login = function () {
  console.log(this.email, "Has Loggged IN");
};

let userOne = new User("yash", "yashikhankar@gmail.com", 27);
let userTwo = new User("Dhruv", "dhruvikhankar@gmail.com", 22);

console.log(userOne);
userOne.login();

// OutPut -->
// User { name: 'yash', email: 'yashikhankar@gmail.com', age: 27 }
// yashikhankar@gmail.com Has Loggged IN

// *** Use Browser Console to see the difference ***
