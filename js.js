// For the first card (Noakhali)
const donateBtn1 = document.getElementById("DonateBtn1");
donateBtn1.addEventListener("click", function () {
  const donated1 = parseFloat(document.getElementById("Cashinput1").value);
  if (isNaN(donated1) || donated1 <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  const balance = parseFloat(document.getElementById("Cashin").innerText);
  const newBalance = balance - donated1;
  if (newBalance < 0) {
    alert("Insufficient balance to make this donation.");
    return;
  }

  document.getElementById("Cashin").innerText = newBalance;

  const currentDeposit1 = parseFloat(
    document.getElementById("CashDeposit1").innerText
  ); // Get the current deposited amount
  const newDeposit1 = currentDeposit1 + donated1;
  document.getElementById("CashDeposit1").innerText = newDeposit1;

  document.getElementById("Cashinput1").value = "";
});

// For the Feni
const donateBtn2 = document.getElementById("DonateBtn2");
donateBtn2.addEventListener("click", function () {
  const donated2 = parseFloat(document.getElementById("Cashinput2").value);
  if (isNaN(donated2) || donated2 <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  const balance = parseFloat(document.getElementById("Cashin").innerText);
  const newBalance = balance - donated2;
  if (newBalance < 0) {
    alert("Insufficient balance to make this donation.");
    return;
  }

  document.getElementById("Cashin").innerText = newBalance;

  const currentDeposit2 = parseFloat(
    document.getElementById("CashDeposit2").innerText
  ); // Get the current deposited amount
  const newDeposit2 = currentDeposit2 + donated2;
  document.getElementById("CashDeposit2").innerText = newDeposit2;

  document.getElementById("Cashinput2").value = "";
});

// For Quota Movement
const donateBtn3 = document.getElementById("DonateBtn3");
donateBtn3.addEventListener("click", function () {
  const donated3 = parseFloat(document.getElementById("Cashinput3").value);
  if (isNaN(donated3) || donated3 <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  const balance = parseFloat(document.getElementById("Cashin").innerText);
  const newBalance = balance - donated3;
  if (newBalance < 0) {
    alert("Insufficient balance to make this donation.");
    return;
  }

  document.getElementById("Cashin").innerText = newBalance;

  const currentDeposit3 = parseFloat(
    document.getElementById("CashDeposit3").innerText
  );
  const newDeposit3 = currentDeposit3 + donated3;
  document.getElementById("CashDeposit3").innerText = newDeposit3;

  document.getElementById("Cashinput3").value = "";
});
