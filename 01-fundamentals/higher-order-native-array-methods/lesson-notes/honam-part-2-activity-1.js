const comics2 = [
  { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "web" },
  { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
  { title: "Nancy", author: "Olivia James", kind: "web" },
  { title: "False Knees", author: "Joshua Barkman", kind: "web" },
];

const comics3 = [
  { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
  { title: "Zen Pencils", author: "Gavin Aung Than", kind: "print" },
  { title: "Nancy", author: "Olivia James", kind: "print" },
  { title: "False Knees", author: "Joshua Barkman", kind: "print" },
];

function isWebComic(comic) {
  // take in a comic
  // return a boolean as to whether that kind is "web"

  // if it's a web comic...
  if (comic.kind === "web") {
    return true;
  } else {
    return false;
  }
}

const comics1 = [
  { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
  { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
  { title: "Nancy", author: "Olivia James", kind: "print" },
  { title: "False Knees", author: "Joshua Barkman", kind: "web" },
];

// const result1 = comics1.every(isPrintComic);
// console.log(result1 === false);

function getTitle(comic) {
  return comic.title;
}

function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i])
    }
  }

  return result;
}

function every(array, callback) {
  let answer = true;
  for (const element of array) {
    if (callback(element) === false) {
      answer = false;
    }
  }

  return answer;
}

function some(array, callback) {
  let answer = false;
  for (const element of array) {
    if (callback(element)) {
      answer = true;
    }
  }

  return answer;
}

// using it in a function:
// function getPrintComics(co tmics) {
//   return comics.filter((comic) => return comic.kind === "print");
// }

// as a one-line anonymous arrow function
const filterResult1 = comics1.filter((comic) => comic.kind === "print");
const titles = comics1.map((comic) => comic.title)
const webComics = comics1.filter((comic) => comic.kind === "web")

if (comics1.every((comic) => comic.kind === "web")) {
  console.log("they're all on the web now print is dead")
}

// console.log(filterResult1 === [comics[0], comics[2]])
console.log(filterResult1[0].kind === 'print');
console.log(filterResult1[1].kind === 'print');
console.log(filterResult1.length === 2);
console.log(filterResult1);


// const result2 = comics1.every(isWebComic);
// console.log(result2 === false);

// const result3 = comics2.every(isPrintComic);
// console.log(result3 === false);

// const result4 = comics2.every(isWebComic);
// console.log(result4 === true);

// const result5 = comics3.every(isPrintComic);
// console.log(result5 === true);

// const result6 = comics3.every(isWebComic);
// console.log(result6 === false);
