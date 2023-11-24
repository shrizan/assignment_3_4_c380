// css variable for javascript
const colorBorder = "#a49f9f";
const errorColor = "red";

// message section
const requiredFieldMsg = "This field is required !!!"

// getting element of DOM for manipulation and processing
const firstCurrency = document.getElementById("firstCurrency");
const firstCurrencyType = document.getElementById("firstCurrencyType");
const secondCurrency = document.getElementById("secondCurrency");
const secondCurrencyType = document.getElementById("secondCurrencyType");
const usdError = document.getElementById("usdError");
const convertButton = document.getElementById("convertButton");

const resetSecondInput = function () {
  secondCurrency.value = null;
}

// when usd change by user logic is implemented here
const onUSDChange = function () {
  secondCurrency.value = null;
  if (!event.target.value || event.target.value === "") {
    firstCurrency.style.borderColor = errorColor;
    usdError.innerHTML = requiredFieldMsg;
  }
  else {

    firstCurrency.style.borderColor = colorBorder;
    usdError.innerHTML = '';
  }
}

// adding change, keyup and focus events to usd input field 
const addEventToUSD = function () {
  firstCurrency.addEventListener("change", onUSDChange, false);
  firstCurrency.addEventListener("keyup", onUSDChange, false);
  firstCurrency.addEventListener("focus", onUSDChange, false);
}

const convertUSDToCAD = function (usdValue) {
  return (usdValue * 1.33).toFixed(3);
}

const convertCADToUSD = function (cadValue) {
  return (cadValue / 1.33).toFixed(3);
}

// adding event listener for convert click button and implementing currency conversion logic
const onConvertButtonClick = function () {
  convertButton.addEventListener("click", function () {
    if (firstCurrency.value) {
      if (firstCurrencyType.value === secondCurrencyType.value) {
        secondCurrency.value = firstCurrency.value;
      }
      else {
        if (secondCurrencyType.value === "cad") {
          secondCurrency.value = convertUSDToCAD(parseFloat(firstCurrency.value));
        }
        else {
          secondCurrency.value = convertCADToUSD(parseFloat(firstCurrency.value));
        }
      }
    }
    else {
      const provideUSDValueMsg = `Please provide ${firstCurrencyType.value} value to convert!!!`;
      alert(provideUSDValueMsg)
    }
  });
}

// making sure other logic and event listener is added after dom is loaded
document.addEventListener("DOMContentLoaded", function () {
  addEventToUSD();
  onConvertButtonClick();
});