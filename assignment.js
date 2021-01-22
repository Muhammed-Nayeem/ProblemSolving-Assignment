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
