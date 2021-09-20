function weatherInfo (temp) {
    let c = convertToCelsius(temp);
    if (c < 0){
      return (c + " is freezing temperature");
      }
    else {
      return (c + " is above freezing temperature");
      }
  }
  
  function convertToCelsius (temperature) {
    let celsius = (temperature - 32) * (5/9);
    return celsius;
  }

  //solution for https://www.codewars.com/kata/55cb854deb36f11f130000e1