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
