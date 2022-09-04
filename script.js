const card = document.getElementById("card-number");
const name1 = document.getElementById("card-name");
const exp = document.getElementById("exp-date");
const exp2 = document.getElementById("exp-date2");
const jcard = document.querySelector(".j-card");
const cvc1 = document.getElementById("cvc");
const jname = document.querySelector(".j-name");
const jexp = document.querySelector(".j-exp");
const jexp2 = document.querySelector(".j-exp2");
const jcvc = document.querySelector(".j-cvc");
const submit = document.querySelector(".btn");
const container = document.querySelector(".form-wrap");
const completed = document.querySelector(".completed");
const continue1 = document.querySelector(".continue-btn");
const resetFields = document.getElementById("form4");

let cardName;
document.addEventListener("input", () => {
  cardName = name1.value;
  jname.innerHTML = cardName;
});

let cardNumber;
document.addEventListener("input", (e) => {
  cardNumber = card.value;
  jcard.innerHTML = card.value;
  if (card.value.length > 0) {
    if (card.value.length % 4 == 0) {
      card.value += "    ";
    }
  }

  // e.target.value = e.target.value
  //   .replace(/[^\dA-Z]/g, "")
  //   .replace(/(.{4})/g, "$1 ")
  //   .trim();
});

let expDate;
document.addEventListener("input", () => {
  expDate = exp.value;
  jexp.innerHTML = expDate;
});

let expDate2;
document.addEventListener("input", () => {
  expDate2 = exp2.value;
  jexp2.innerHTML = expDate2;
});

let cvc;
document.addEventListener("input", () => {
  cvc = cvc1.value;
  jcvc.innerHTML = cvc;
});

submit.addEventListener("click", function () {
  if (
    card.value.length > 0 &&
    name1.value.length > 0 &&
    exp.value.length > 0 &&
    exp2.value.length > 0 &&
    cvc1.value.length > 0
  ) {
    container.classList.remove("active");
    container.classList.add("hidden");
    completed.classList.remove("hidden");
    completed.classList.add("active");
  } else {
    alert("Please fill up the form before submitted");
  }
});

continue1.addEventListener("click", function () {
  completed.classList.remove("active");
  completed.classList.add("hidden");
  container.classList.remove("hidden");
  container.classList.add("active");
  resetFields.reset();
});
