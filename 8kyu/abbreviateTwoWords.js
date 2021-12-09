function abbrevName(name){
    console.log(name, 'original name')
    let splitName = name.split(' ')
    let firstName = splitName.shift()
    let lastName = splitName.pop()
    let initials = []
    initials.push(firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase())
    
    console.log(initials, 'initials?')
    return initials.toString()
  }

  
  //solution for codewars : https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3