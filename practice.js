//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
    // This gives refers to the scope(variables it has access too)(execution context) of the object to which it is bound. (refers to owner of function/object that we're executing)
    //
    // Fundamentally, scope is function-based while context is object-based. In other words, scope pertains to the variable access of a function when it is invoked and is unique to each invocation. Context is always the value of the this keyword which is a reference to the object that “owns” the currently executing code
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?
    // Default - window is the global scope and doesn't require the use of this
    // Implicit - imply is by whoever is left of the dot
    // Explicit - forced (bind, call, call) - forcing the context
    // newBinding - constructor function, create new object and returns it, applied outside of three rules,  var x = new function() - passed in context for function



      // Bind() - fixes use of this when used as a callback or variable
      // Apply() - fixes when borrowing methods
      // Call()
      // Set Variable equal to this -  used for closures/anonymous functions
      //Answer

  // 3) What is the difference between call and apply?
    // Apply allows you to put all of the arguments to be called in a function into an array.
      //Answer

  // 4) What does .bind do?
    // Bind is similar to apply/call but instead of executing immediately, it returns a function reference that can be used later on.
      //Bind will need to be invoked to be used later on.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: "yo",
      email: "yo@bb.com",
      getUsername: function(){
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
    user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.
function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function(){
    this.move = this.move +10;
    return this.move;
  }
}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.call(prius)
getYear.call(mustang)

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername(); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
  // undefined
//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
  // this window
//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
  var userName = getMyUsername.call(myUser)
