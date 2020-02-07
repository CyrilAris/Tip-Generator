function calculateTip() {
  var bill = document.getElementById("bill").value;
  var tipAmt = document.getElementById("tipAmt").value;
  var people = document.getElementById("people").value;

  if (bill === "" || tipAmt == 0) {
    return window.alert("Please enter your values");
  }
  
  if (people === "" || people <= 1) {
    people = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  var total = (bill * tipAmt) / people;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("calculate").onclick = function() {
  calculateTip();
};