function transform(text, fn) {
  if (typeof fn !== "function") {
    return text;
  }

  return fn(text);
}

// function kebabCaseIt(str) {
//   const words = str.split(' ')
//   const banana = words.join('-')

//   return banana;

//   // or:
//   // return str.split(' ').join('-')
// }

const kebabCaseIt = (str) => str.split(' ').join('-')

function firstLettersOnly(str) {

}

console.log(transform('left right left', kebabCaseIt) === 'left-right-left')
console.log(transform('some other string', kebabCaseIt) === 'some-other-string')
console.log(transform('up Down left', firstLettersOnly) === 'UDL')

transform('left right left', (str) => str.split(' ').join('-'))

// re-usability? bad. But! YAGNI. (You Ain't Gonna Need It.)

const sum = 3 + 5;
console.log(sum)
console.log(3 + 5)

const people = ['Colin Jaffe', 'Tafari Excell', 'Jordan Walker']

const firstNames = people.map((person) => person.split(' ')[0])
firstNames; //> ['Colin', 'Tafari', 'Jordan']
const lastNames = people.map((person) => person.split(' ')[1])
lastNames; //> ['Jaffe', 'Excelle', 'Walker']
const initials = people.map((person) => person[0] + person.split(' ')[1][0])
initials; //['CJ', 'TF', 'JW']
