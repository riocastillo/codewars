function feast(beast, dish) {
    let firstLetterOfBeast = beast.charAt(0)
    let lastLetterOfBeast = beast.substring(beast.length-1)
    let firstLetterOfDish = dish.charAt(0)
    let lastLetterOfDish = dish.substring(dish.length-1)
  if (firstLetterOfBeast === firstLetterOfDish & lastLetterOfDish === lastLetterOfBeast){
    return true
  }
    else{
      return false
    }
  }

  //solution for https://www.codewars.com/kata/5aa736a455f906981800360d