function filter_list(l) {
    return l.filter((element) => typeof element === 'number')
  }

  //solution for codewars: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

  function filter_list(l) {
    let newArr = []
    l.forEach((element) => {
      console.log(element)
      if(typeof element == 'number'){
        newArr.push(element)
      }
    })
    return newArr
  }
  
  //make empty array
  //go thru every element in the array and if their typeof is a number 
  //then push them into the newArr
  //if their typeof is anything else then return
  //or use a filter method?