function howManyYears(date1, date2){
    let year1 = date1.slice(0,4)
    let year2 = date2.slice(0,4)
    let answer = Math.abs(year1 - year2)
    return answer
  }
//solution for codeewars https://www.codewars.com/kata/588f5a38ec641b411200005b  