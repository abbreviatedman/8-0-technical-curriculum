function right() {
  return "Right";
}

function left() {
  return "Left";
}

function go(goLeft) {
  if (goLeft) {
    return left
  }

  return right
  
  // or we could write the above with a ternary as:
  // return goLeft ? left : right;
}

// How could we _use_ `go` up above? Let's talk about how we could use it.

// what does passing go `true` _do_??
const funcWeGetBack1 = go(true)
// what data type is funcWeGetBack1??
// it's a function, holds the same value as `left`
const result = funcWeGetBack1();
// what is result??
'Left'

// how do we get the string 'Right' instead??
const funcWeGetBack2 = go(false)
const result2 = funcWeGetBack2();
result2; //> 'Right';

// a cool external library that adds colors to strings
require('colors')

function loggerMaker(useColor) {
  if (useColor) {
    return function(label, value) {
      console.log(`${label.rainbow} --> ${value.toString().green.bold}`)
    }
  }

  return function(label, value) {
    console.log(`${label} --> ${value}`)
  }
}

const l = loggerMaker(false);
const lwc = loggerMaker(true)

const sum = 5 + 3;
// l('the sum of 5 and 3', sum)
lwc('the sum of 5 and 3', sum)
