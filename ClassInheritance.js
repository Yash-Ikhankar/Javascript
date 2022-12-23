// This class is for user What if we want to delete a User
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

// Create a Admin Class
class Admin extends User {
  /* With the use of extends we will inherit User property/methods also no need to create constructor */
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

let userOne = new User("yash", "yashikhankar@gmail.com", 27);
let userTwo = new User("Dhruv", "dhruvikhankar@gmail.com", 22);
let admin = new Admin(
  "sahil",
  "sahilikhankr@gamil.com"
); /* Created Admin input*/
let users = [
  userOne,
  userTwo,
  admin,
]; /* Stored Users in an Arrya so we can filter throw them */

admin.deleteUser(userOne); /*Delete User from the Array */

console.log(users);

// OutPut -->[
//   User {
//     name: 'yash',
//     email: 'yashikhankar@gmail.com',
//     age: 27,
//     score: 0
//   }
// ]
//  userTwo Deleted
