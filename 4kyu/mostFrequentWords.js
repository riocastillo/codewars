function topThreeWords(text) {
    //square brackets is capturing a range 
    // the \w is matching any alphabetical or numerical element 
    //the queston mark is making the apostrophe optional - any word or apostrophe
    //the plus is saying that as long as the result comes back as true,
    //its going to keep looking until it gets a false result => and anything past that
    // is not going to looked at
    //you need the forward/backlash to let js know we're using regex
    //the modifiers => i means ignore the case, g means its global so find more than just the first 
    //element and m means this might have multiple lines
    //the b is a boundary - look into this more
    
    let reg = /\b[\w?']+\b/igm
    let obj = {}
    //matching the inputed text with the regex rules 
    let withoutSpecialCharacters = text.match(reg)
    //if a result is found then we're going to go thru each el:
      if (withoutSpecialCharacters !== null) {
        withoutSpecialCharacters.forEach((word) =>{
          let newWord = word.toLowerCase()
          // if this is the first time we've come across this word
          if(!obj[newWord]){
            obj[newWord] = 1
          }
          // if this isnt the first time we've come across this word, we're incremeneted the occurance num
          else if(obj[newWord]){
            obj[newWord] = obj[newWord] + 1
          }
        })
    }
        // we're grabbing the entries then sorting the object to figure out the highest occurances
        let sortedObj = Object.entries(obj)
                  //compare the values and sorting it from descending order
                        .sort((a,b) => b[1] - a[1])
                  //getting the highest three items
                        .splice(0,3)
                  // returning a new array with just the words of highest occurance
                        .map((entry) => entry[0])
        console.log(sortedObj, 'test')
        return sortedObj
        
  }
  
  // remove all special characters
  //split the string into individual words
  // loop thru the words and check it against an empty array
  //increment a counter for each word