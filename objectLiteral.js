var userOne = {
  email: "yashikhankar@gmail.com",
  name: "yash ikhankar",
  age: 29,

  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has logged out");
  },
  // ---- OR ----
  // login:function(){
  //   console.log(this.email,'has logged in')
  // }
  // ------------
};

console.log(userOne);
// OutPut --> {
//   email: 'yashikhankar@gmail.com',
//   name: 'yash ikhankar',
//   age: 29,
//   login: [Function: login],
//   logout: [Function: logout]
// }

console.log(userOne.logout());
// OutPut--> yashikhankar@gmail.com has logged in

userOne.name = "sahil";
console.log(userOne);
// OutPut--> name:sahil
// ------ OR -------
userOne["name"] = "Dhruv";
console.log(userOne);
// OutPut--> name:Dhruv

userOne.city = "Nagpur";
console.log(userOne);
// Added city in object
// OutPut ---->   city: 'Nagpur'
