// DDOM Elements
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const displayEl = document.querySelector('.display')
const acEl = document.querySelector('.ac')
const pmEl = document.querySelector('.pm')
const percentEl = document.querySelector('.percent')

const additionEl = document.querySelector('.addition')
const substractionEl = document.querySelector('.substraction')
const multiplicationEl = document.querySelector('.multiplication')
const divisionEl = document.querySelector('.divisioin')
const equalEl = document.querySelector('.equal')

const decimalEl = document.querySelector('.decimal')
const number1El = document.querySelector('.number1')
const number2El = document.querySelector('.number2')
const number3El = document.querySelector('.number3')
const number4El = document.querySelector('.number4')
const number5El = document.querySelector('.number5')
const number6El = document.querySelector('.number6')
const number7El = document.querySelector('.number7')
const number8El = document.querySelector('.number8')
const number9El = document.querySelector('.number9')
const number0El = document.querySelector('.number0')

const numberElArray = [
    number0El, number1El, number2El, number3El, number4El,
    number5El, number6El, number7El, number8El, number9El
];












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