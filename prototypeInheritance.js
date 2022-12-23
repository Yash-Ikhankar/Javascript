// *** ProToType Inheritance ***

function User(name, email, age) {
  this.name = name;
  this.email = email;
  this.age = age;
}

// Adding Mehod using ProtoType
User.prototype.login = function () {
  console.log(this.email, "Has Loggged IN");
};

// Inheritance
function Admin(...args) {
  User.apply(this.args);
  this.role = "super admin";
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email != u.email;
  });
};

let userOne = new User("yash", "yashikhankar@gmail.com", 27);
let userTwo = new User("Dhruv", "dhruvikhankar@gmail.com", 22);
let admin = new Admin("sahil", "sahilikhankr@gamil.com", 22);
let users = [userOne, userTwo, admin];

console.log(admin);

// OutPut -->
// User { name: 'yash', email: 'yashikhankar@gmail.com', age: 27 }
// yashikhankar@gmail.com Has Loggged IN

// *** Use Browser Console to see the difference ***
