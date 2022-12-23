// This was used to construct a function BEFORE Classes was introduce and under the Hood classes work like this

function User(name, email, age) {
  this.name = name;
  this.email = email;
  this.age = age;
  // Methods Added
  this.login = function () {
    console.log(this.email, "Has Loggged IN");
  };
}

let userOne = new User("yash", "yashikhankar@gmail.com", 27);
let userTwo = new User("Dhruv", "dhruvikhankar@gmail.com", 22);

console.log(userOne);
console.log(userTwo);
