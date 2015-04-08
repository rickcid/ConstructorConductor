//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age){
  this.name = name;
  this.age = age;
};


//Now create three instances of Person with data you make up

var user1 = new Person('Tyler', 24);
var user2 = new Person('Cahlan', 31);
var user3 = new Person('Lenny', 34);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
  alert('my name is ' + this.name);
};

user1.sayName();
user2.sayName();