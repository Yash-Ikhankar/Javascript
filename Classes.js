// var userOne = {
//   email: "yashikhankar@gmail.com",
//   name: "yash ikhankar",
//   age: 29,
//   login() {
//     console.log(this.email, "has logged in");
//   },
//   logout() {
//     console.log(this.email, "has logged out");
//   },
// };
// var userTwo = {
//   email: "yashikhankar@gmail.com",
//   name: "yash ikhankar",
//   age: 29,
//   login() {
//     console.log(this.email, "has logged in");
//   },
//   logout() {
//     console.log(this.email, "has logged out");
//   },
// };
//
// What if we wanted to create multiple users . We can do that by about example but it will become non mamangable.
// To solve this problem Classes can be used
//
// ***
// class User{
//  ---->Empty User Class<----
// }
// ***

// class User {
//   constructor(name, email, age) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
// }

// let userOne = new User("yash", "yashikhankar@gmail.com", 27);
// let userTwo = new User("Dhruv", "dhruvikhankar@gmail.com", 22);

// console.log(userOne);
// console.log(userTwo);

// OutPut--> User { name: 'yash', email: 'yashikhankar@gmail.com', age: 27 }
// User { name: 'Dhruv', email: 'dhruvikhankar@gmail.com', age: 22 }

// the 'new' keyword
// - creates a new empty object{}
// - sets the value of 'this' to be the new empty object
// -calls the constructor method

// ***INSERT METHODS IN CLASS***

// class User {
//   constructor(name, email, age) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
//   // insert method
//   login() {
//     console.log(this.email, "Just Login");
//   }
//   logout() {
//     console.log(this.email, "Just Logout");
//   }
// }

// let userOne = new User("yash", "yashikhankar@gmail.com", 27);
// let userTwo = new User("Dhruv", "dhruvikhankar@gmail.com", 22);

// userOne.login();
// userTwo.logout();

// OutPut -->
// yashikhankar@gmail.com Just Login
// dhruvikhankar@gmail.com Just Logout

// *** METHOD CHAINING ***

// What if we we wanted to call login() and logout() for userOne()
// we can cant do userOne.login().logout() X
// to solve this we use method chaining

class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = 0;
  }

  login() {
    console.log(this.email, "Just Login");
    return this; /* return the instants of that object to user METHOD CHAINING */
  }
  logout() {
    console.log(this.email, "Just Logout");
    return this; /* return the instants of that object to user METHOD CHAINING */
  }
}

let userOne = new User("yash", "yashikhankar@gmail.com", 27);
let userTwo = new User("Dhruv", "dhruvikhankar@gmail.com", 22);

userOne.login().logout();
// OutPut -->
// yashikhankar@gmail.com Just Login
// yashikhankar@gmail.com Just Logout

userTwo.login().logout();
// OutPut -->
// dhruvikhankar@gmail.com Just Login
// dhruvikhankar@gmail.com Just Logout
