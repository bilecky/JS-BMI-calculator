function bmiCalc() {
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if (height === "" || isNaN(height))
    results.innerHTML = "Invalid Height! Please use numbers";
  else if (weight === "" || isNaN(weight))
    results.innerHTML = "Invalid Weight! Please use numbers";
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed();
    results.innerHTML = bmi;
  }
}

const button = document.querySelector(".results__btn");

button.addEventListener("click", bmiCalc);
