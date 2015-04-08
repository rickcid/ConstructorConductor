//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here
var Person = function(name, age){
  this.name = name;
  this.age = age;
};

var user1 = new Person('Tyler', 24);
var user2 = new Person('Cahlan', 31);
var user3 = new Person('Lenny', 34);


Person.prototype.reverse = function() {
  alert((this.name).split('').reverse().join(''));
};

user1.reverse();
user2.reverse();
user3.reverse();