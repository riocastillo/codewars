function ensureQuestion(s) {
    if (s.substring(s.length - 1) === '?'){
      return s
    }
    else{
      return s + '?'
    }
  }

  // solution for https://www.codewars.com/kata/5866fc43395d9138a7000006