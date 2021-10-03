// function highAndLow(numbers){
//   let high = numbers.charAt(numbers.length-1)
//    let low = numbers.charAt(0)
  
// }

function highAndLow(numbers){
    numbers = numbers.split(" ")
      return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
    }

    //solution to codewars https://www.codewars.com/kata/554b4ac871d6813a03000035