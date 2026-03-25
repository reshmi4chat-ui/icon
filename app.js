function addNumbers() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;

  if (n1 === "" || n2 === "") {
    document.getElementById("result").innerText = "Please enter both numbers";
    return;
  }

  let sum = parseFloat(n1) + parseFloat(n2);

  document.getElementById("result").innerText = "Result: " + sum;
}
