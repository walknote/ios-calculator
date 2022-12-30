// DDOM Elements
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const displayEl = document.querySelector(".display");
const acEl = document.querySelector(".ac");
const pmEl = document.querySelector(".pm");
const percentEl = document.querySelector(".percent");

const additionEl = document.querySelector(".addition");
const substractionEl = document.querySelector(".substraction");
const multiplicationEl = document.querySelector(".multiplication");
const divisionEl = document.querySelector(".divisioin");
const equalEl = document.querySelector(".equal");

const decimalEl = document.querySelector(".decimal");
const number1El = document.querySelector(".number-1");
const number2El = document.querySelector(".number-2");
const number3El = document.querySelector(".number-3");
const number4El = document.querySelector(".number-4");
const number5El = document.querySelector(".number-5");
const number6El = document.querySelector(".number-6");
const number7El = document.querySelector(".number-7");
const number8El = document.querySelector(".number-8");
const number9El = document.querySelector(".number-9");
const number0El = document.querySelector(".number-0");

const numberElArray = [
  number0El,
  number1El,
  number2El,
  number3El,
  number4El,
  number5El,
  number6El,
  number7El,
  number8El,
  number9El,
];

// Functions

const getValueAsStr = () => {
  const currentDisplayStr = displayEl.textContent;
  return currentDisplayStr.split(",").join("");
};

const setStrAsValue = (valueStr) => {
  if (valueStr[valueStr.length - 1] === ".") {
    displayEl.textContent += ".";
    return;
  }

  const [wholeNumStr, decimalStr] = valueStr.split(".");
  if (decimalStr) {
    displayEl.textContent =
      parseFloat(wholeNumStr).toLocaleString() + "." + decimalStr;
  } else {
    displayEl.textContent = parseFloat(wholeNumStr).toLocaleString();
  }
};

const getValueAsNum = () => {
  return parseFloat(getValueAsStr());
};

const handleNumberClick = (numStr) => {
  const currentDisplayStr = getValueAsStr();
  if (currentDisplayStr === "0") {
    setStrAsValue(numStr);
  } else {
    setStrAsValue(currentDisplayStr + numStr);
  }
};

//Add event Listener to functions


acEl.addEventListener('click', () => {
    setStrAsValue('0')
});

pmEl.addEventListener('click', () => {
    const currentValueNum = getValueAsNum();
    const currentValueStr = getValueAsNum();
    if(currentValueStr === '-0') {
        setStrAsValue('0')
        return;
    }

    if (currentValueNum > 0) {
        setStrAsValue('-'  + currentValueNum)
    } else { 
        setStrAsValue(currentValueStr.substring(1));
    }
});

percentEl.addEventListener('click', () => {
    const currentValueNum = getValueAsNum();
    const newValueNum = currentValueNum / 100;
    setStrAsValue(newValueNum.toString())
})

// Add event listeners to operators



//  Add event listeners to numbers and buttons

for (let i = 0; i < numberElArray.length; i++) {
  const numberEl = numberElArray[i];
  numberEl.addEventListener("click", () => {
    handleNumberClick(i.toString());
  });
}

decimalEl.addEventListener("click", () => {
  const currentValueAsStr = getValueAsStr();
  if (!currentValueAsStr.includes(".")) {
    setStrAsValue(currentValueAsStr + ".");
  }
});

// Set up time
const updateTime = () => {
  const currentTime = new Date();

  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  if (currentHour > 12) {
    currentHour -= 12;
  }

  hourEl.textContent = currentHour.toString();
  minuteEl.textContent = currentMinute.toString();
};

setInterval(updateTime, 1000);

updateTime();
