console.log('hello, world!');

// Array indexs start from zero 
let colours = ['red', 'yellow', 'blue', 1, true]
console.log(colours[0]) // red. 
console.log(colours[1]) // yellow
colours[1] = 'sam' // change the content of colours[1] to sam

// push the value 'tim' to the end of the array
colours.push('tim');

// // keyword for: (declare counter, when the counter is 5; )
for (let counter = 20; counter > 0; counter--) {
    console.log('hello, students!')
}

// let isLoggedIn = true
// while (!isLoggedIn) {
//     console.log(`please log in`)
// }


let betterColours = ['indigo', 'peach', 'rose', 'mango']

// for (let i = 0; i < betterColours.length; i++) {
//     console.log(betterColours[i])
// }

// for (let colour of betterColours) {
//     console.log(colour)
// }

betterColours.forEach(function (colour) {
    console.log(colour)
})

console.log(colours) 


