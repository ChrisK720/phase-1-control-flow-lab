function scuberGreetingForFeet(ride){
  let greeting
  if (ride <= 400){
    greeting = 'This one is on me!';
  }else if (ride > 2000 && ride <= 2500){
    greeting = 'that will be 30 dollars please';
  }else if( ride > 2500){
    greeting = 'not allowed';
  }

  return greeting

  
  // Write your code here!
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go"
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  let result
  if (tip === "generous"){
    result = "Thank you so much"
   } else if (tip === "Not as generous"){
    result = "Thank you"
   } else{
    result = "Bye"
   }
  // Write your code here!
}