# Higher Order Functions

## Learning Objectives

By the end of this lesson you should be able to:

- Define what makes a higher order function.
- Write functions that accept a function as an argument and use that inputted function.

---

## Guiding Questions

- What is the definition of a higher order function?

Definition 1: A function that returns a function.
Definition 2: A function that takes in a function as a parameter/argument.

- Why are anonymous functions useful for higher order functions?

```js
function makeLogger() {
  return function (label, value) {
    console.log(label + '\n' + value '\n' + '----' + '\n')
  }
}

const l = makeLogger();
l('the sum of 5 and 3', 8) //>
/*
the sum of 5 and 3
8
---

*/
```

- Take a look at the functions below. Are any of the functions a higher order function? If so, which ones and why so? If not, why not?

  ```js
  function truthy() {
    return true;
  }

  function falsy() {
    return !truthy();
  }

  falsy(); //> false
  ```
  
  ```js
  function calculateTicketPrice(ticket) {
    return ticket.price;
  }
  
  function purchaseTickets(tickets) {
    let total = 0;
    for (const ticket of tickets) {
      total += calculateTicketPrice(ticket)
    }
    
    return total;
  }
  ```

- Take a look at the functions below. Are any of the functions a higher order function? If so, which ones and why so? If not, why not?

  ```js
  function left() {
    return "Left";
  }

  function right() {
    return "Right";
  }

  function go(goLeft) {
    if (goLeft) {
      return left
    }

    return right
    
    // or we could write the above with a ternary as:
    // return goLeft ? left : right;
  }
  ```
  
  Time to get our hands dirty with an activity! [Activity 1](https://replit.com/@colinjaffe/hof-activity-1#index.js)

- Take a look at the functions below. Are any of the functions a higher order function? If so, which ones and why so? If not, why not?

  ```js
  const directions = [];

  function storeDirections(direction) {
    directions.push(direction);
  }

  function go(direction, operation) {
    operation(direction);
  }
  
  function makeFullName(person) {
    return person.firstName + ' ' + person.lastName;
  }
  
  makeFullName({firstName: 'Colin', lastName: 'Jaffe'})
  makeFullName({firstName: 'Sangun', lastName: 'Jaffe'})

  go("Left", storeDirections);
  go("Right", storeDirections);
  go("Up", storeDirections);
  console.log(directions); //> ["Left", "Right", "Up"]
  ```
  
  Time for another activity! [Activity 2](https://replit.com/@colinjaffe/hof-activity-2#index.js)

- Take a look at the higher order function below. The `transform()` function expects, as its second argument, a function that accepts at least one argument.

  ```js
  function transform(text, fn) {
    if (typeof fn !== "function") {
      return text;
    }

    return fn(text);
  }
  ```
  
  How could we use this function?
  
  ```js
  function lowerCaseIt(str) {
    return str.toLowerCase();
  }

  transform('Colin', lowerCaseIt)
  ```

Time for your [breakout room activity](https://replit.com/@colinjaffe/hof-activity-3#index.js):

