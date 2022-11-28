# Higher Order Native Array Methods

These lesson notes cover `.every()`, `.some()`, and `.sort()`.

## Learning Objectives

By the end of this lesson you should be able to:

- Describe the input and return values of `.every()`.
- Use `.every()` to solve code problems.
- Describe the input and return values of `.some()`.
- Use `.some()` to solve code problems.
- Describe the input and return values of `.sort()`.
- Use `.sort()` to solve code problems.

---

What are the two kinds of Higher Order Functions?

1. A function that takes a function as a parameter.
2. A function that returns a function.

In a user interface, we _can't_ run all our code immediately.

We have to _respond_ to each user's specific uses of our app.

WHEN they click "change my profile picture", THEN we run our profile-pic-changing code.
WHEN they click "add a new post", THEN we run our add-a-new-post code.


```js
function addPost() {
  // Does fancy stuff to add a post (LOT of code here)
}

whenTheyClickAddPost(addPost);
```

## Guiding Questions

- What is a higher order function?

- What is a native array method?

A method that is built in to every array.

examples:

- push
- pop
- indexOf
- join
- includes
- slice
- filter
- map

- What is a HIGHER ORDER native array method.

Accepts a function as parameter.

examples:

- filter
- map
- forEach
- find
- every
- some
- sort
- reduce

- What does it mean for a function to produce side effects?

A side effect is something that produces an effect OUTSIDE of just returning a value.

examples:

- changing a global variable
- logging a value
- modifying the user's interface
- sending data over the network
- basically anything USEFUL in an app

It's important to do side effects (ultimately that's what the user sees!).
But it's also important that _what_ the user sees is from bug-free logic (which should NEVER have side effects). 

side-effect-producing HONAMs:

- `.forEach`

- What is the opposite of a side effect?

A function that _returns_ a value.

examples:

- `.map` - return a transformed array
- `.filter` - return a smaller array
- `.find` - return one matching value
- `.reduce` - return ANYTHING (powerful but confusing)

- Is it possible for functions that return values to also produce side effects?

```js
const people = ['Taylor', 'Marangely', 'Joshua', 'Florence', 'Jordan']
const userString = 'J'
const userSearchResults = people.filter((person, i) => {
  people[i] = 'Elon Musk is a $%^$^#!@'

  return person.includes(userString)
})

const userSearchResults2 = people.filter((person, i) => person.includes(userString))

userSearchResults; //> ['Joshua', 'Jordan']
people; //> ['Elon is terrible', 'Elon is terrible', 'Elon is terrible', 'Elon is terrible']
```

- The `.every()` method expects at least one argument. What data type is this argument?

- What is a callback function?

- The `.every()` method's callback function has up to three parameters. What are these parameters?

- Take a look at the following code, which is incomplete. Based on how the code _reads,_ what do you expect the `.every()` method to do?

  ```js
  const comics = [
    { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
    { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
    { title: "Nancy", author: "Olivia James", kind: "print" },
    { title: "False Knees", author: "Joshua Barkman", kind: "web" },
  ];

  const result = comics.every(isPrintComic);
  console.log(result); //> false
  ```
  
  - Activity 1: let's make `isPrintComic` and `isWebComic` together!
  
- Activity 2: let's implement our own `every` method! (Together.)

- Update the code below so that it uses the `.every()` method instead of a `for` loop. Inside of `allComicsHaveTitles()` you will have to write another, anonymous function.

  ```js
  function allComicsHaveTitles(comics) {
    let result = true;
    for (let comic of comics) {
      if (!comic.title) result = false;
    }
    return result;
  }

  const result = allComicsHaveTitles(comics);
  console.log(result); //> false
  ```

- The callback function inside of the `.every()` method coerces the returned value into a boolean. What does the previous sentence mean? Describe in your own words.

- How does the `.some()` method differ from the `.every()` method? How is it similar?

- Take a look at the following code. How many times does the `isWebComic()` function get called? How could you confirm?

  ```js
  function isWebComic(comic) {
    return comic.kind === "web";
  }

  const result = comics.some(isWebComic);
  console.log(result); //> true
  ```

- The `.sort()` method sorts elements in an array. Although the functionality is very different, in what ways is it similar to `.every()` and `.some()`?

- Calling the `.sort()` method looks like it might magically work, depending on the elements in the array it is sorting.

  ```js
  const numbers = [4, 2, 3, 1, 0];
  const result = numbers.sort();
  console.log(result); //> [ 0, 1, 2, 3, 4 ]
  ```

  However, it can have unexpected results.

  ```js
  const numbers = [11, 1, 0, 22, 2];
  const result = numbers.sort();
  console.log(result); //> [ 0, 1, 11, 2, 22 ]
  ```

  In general, you should not use the `.sort()` method without a callback function. However, can you describe why the `.sort()` method is organizing the numbers above in this way?

- The `.sort()` method expects one argument. What data type is this argument?

- The `.sort()` method's callback function has up to two parameters. What are these parameters?

- The `.sort()` method's callback function expects a number to be returned. The number must either be a positive number, a negative number, or `0`. What is the effect of each of these values?

- The code below sorts numbers appropriately. Based on what you know about `.sort()` will the numbers be sorted in ascending order (i.e. 0, 1, 2...) or descending order (i.e. 22, 11, 2...)?

  ```js
  const numbers = [11, 1, 0, 22, 2];
  const result = numbers.sort((a, b) => {
    if (a > b) {
      return -1;
    }

    if (a < b) {
      return 1;
    }

    return 0;
  });
  console.log(result);
  ```

- Is `.sort()` a destructive or non-destructive method?

- Take a look at the table below. What does each column mean?

  | Method     | Callback expected return value | Method return value | Destructive? |
  | ---------- | ------------------------------ | ------------------- | ------------ |
  | `.every()` | Boolean.                       | Boolean.            | No.          |
  | `.some()`  | Boolean.                       | Boolean.            | No.          |
  | `.sort()`  | Number.                        | An array.           | Yes.         |
