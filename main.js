function isHot(temp) {
  return (temp>=80) ? 'Yes, it is indeed hot.' : 'No, it is not hot.'
  }


function helloThere(str) {
  return (str.length<=5) ? 'Hello' + ', ' + str : 'Hi' + ', ' + str ;
}


function goodbyeYou(str) {
  return (str===undefined) ? 'Goodbye, stranger' : 'Goodbye, ' + str;
}


module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}