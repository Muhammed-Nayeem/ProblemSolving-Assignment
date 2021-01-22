// https://github.com/Muhammed-Nayeem/ProblemSolving-Assignment


// Problem-01: kilometerToMeter
function kilometerToMeter(kilometer) {
  //checking the value is negative or not.
  if (kilometer < 0) {
    return "Not a valid number! Please enter a positive value.";
  } else {
    var meter = 1000 * kilometer;
    return meter;
  }
}
console.log(kilometerToMeter(5)); //Invoking function and console output for testing purpose;



// Problem-02: budgetCalculator
function budgetCalculator(watches, phones, laptops) {
  //Checking the given values negative or not;
  if (watches < 0 || phones < 0 || laptops < 0) {
    return "Your entire value must be positive for each product!";
  } else {
    var watchesPrice = watches * 50;
    var phonesPrice = phones * 100;
    var laptopsPrice = laptops * 500;
    var totalPrice = watchesPrice + phonesPrice + laptopsPrice;
    return totalPrice;
  }
}
console.log(budgetCalculator(2, 2, 3)); //Invoking function and console output for testing purpose;



// Problem-03: hotelCost
function hotelCost(days) {
  var totalRent = 0;
  var firstTenDays, secondTenDays, thirdTenDays, remainingDays;
  //Checking the given value is negative or not;
  if (days <= 0) {
    return "Your entire value must be positive and value should be greater than Zero.";
  } else if (days <= 10) {
    totalRent = days * 100;
  } else if (days <= 20) {
    firstTenDays = 10 * 100;
    remainingDays = days - 10;
    secondTenDays = remainingDays * 80;
    totalRent = firstTenDays + secondTenDays;
  } else {
    firstTenDays = 10 * 100;
    secondTenDays = 10 * 80;
    remainingDays = days - 20;
    thirdTenDays = remainingDays * 50;
    totalRent = firstTenDays + secondTenDays + thirdTenDays;
  }
  return totalRent;
}
console.log(hotelCost(25)); //Invoking function and console output for testing purpose;



// Problem-04: megaFriend
function megaFriend(arrOfFriends) {
  // Checking the given array is empty or not;
  if (arrOfFriends.length <= 0) {
    return "Array of friends name can not be empty";
  }
  var maxElement = arrOfFriends[0];
  for (var i = 0; i < arrOfFriends.length; i++) {
    var element = arrOfFriends[i];
    if (element.length > maxElement.length) {
      maxElement = element;
    }
  }
  return maxElement;
}
var friendsName = ["Pranab Roy", "Muhammed Sohel Islam", "Shuvo Paul", "Muhammed Shakib", "Crescent Debanth"];
console.log(megaFriend(friendsName)); // Invoking function and console output for testing purpose;
