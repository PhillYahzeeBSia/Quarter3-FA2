function returnSum()
{
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var sum = parseInt(num1) + parseInt(num2);
  document.getElementById("print").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum + ".";
}
function returnDifference()
{
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var difference = parseInt(num1)- parseInt(num2);
  document.getElementById("print").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + difference + ".";
}
function returnProduct()
{
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var product = parseInt(num1) * parseInt(num2);
  document.getElementById("print").innerHTML = "The product of " + num1 + " and " + num2 + " is " + product + ".";
}
function returnQuotient()
{
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var quotient = parseInt(num1) / parseInt(num2);
  document.getElementById("print").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + quotient + ".";
}
function returnModulus()
{
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var modulus = parseInt(num1) % parseInt(num2);
  document.getElementById("print").innerHTML = "The remainder of " + num1 + " and " + num2 + " is " + modulus + ".";
}
