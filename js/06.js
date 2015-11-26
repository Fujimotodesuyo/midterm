function isPrimeNumber(number){
  if(number < 2){
    return false;
  }
  var i = 2;
  while(i < number / 2){
    if(number % i == 0){
       
