function defineSuit(card) {
    if(card.charAt(card.length-1) === '♣' ){return 'clubs'}
   else if(card.charAt(card.length-1) === '♠' ){return 'spades'}
   else if(card.charAt(card.length-1) === '♦' ){return 'diamonds'}
   else if(card.charAt(card.length-1) === '♥' ){return 'hearts'}}

 //solution for codewars https://www.codewars.com/kata/5a360620f28b82a711000047