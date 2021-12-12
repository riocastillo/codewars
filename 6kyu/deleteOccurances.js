function deleteNth(arr,n){
    let obj = {} // empty object that we are using to count the amount of occurnaces of nums
    let answer = [] // returning the answers without numbers repeated < 2
    
    arr.forEach( num => {
      //checking in the num has occured
      //if the number has not occursed, then the count is 1 and the num gets pushed into the 
      //final array
      if (!obj[num]) {
        obj[num] = 1
        answer.push(num)
        //similating the number before
        // if the numbers occurance + 1 is less than n or equal to n - the max number, 
        //then the occurance count should increment and the num gets pushed
      } else if (obj[num] + 1 <= n) {
        obj[num]++
        answer.push(num)
      }
    })
  
    return answer
  }

  //codewars solution https://www.codewars.com/kata/554ca54ffa7d91b236000023