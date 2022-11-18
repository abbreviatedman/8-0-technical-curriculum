require('colors')

function loggerMaker(useColor) {
  if (useColor) {
    return function(label, value) {
      console.log(`${label.red} --> ${value.toString().green}`)
    }
  }

  return function(label, value) {
    console.log(`${label} --> ${value}`)
  }
}

const l = loggerMaker();
const lwc = loggerMaker(true)

l('the sum of 5 and 3', 5 + 3)
lwc('the sum of 5 and 3', 5 + 3)
