// DDOM Elements
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const displayEl = document.querySelector('.display')
const acEl = document.querySelector










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