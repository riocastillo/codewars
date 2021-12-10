function squareDigits(num){
    let nums = num.toString().split("")
    let numArr = []
    console.log(nums, 'nums')
    nums.forEach((n) => {
      let multiplied = n*n
      numArr.push(multiplied)
    })
    let answer = Number(numArr.toString().split(',').join(""))
    console.log(answer, 'answer', 'type:', typeof answer)
    return answer
    
  }

  //solution for codewar: https://www.codewars.com/kata/546e2562b03326a88e000020