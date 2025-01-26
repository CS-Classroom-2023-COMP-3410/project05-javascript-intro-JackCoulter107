const timeElement = document.getElementById('time');
const meridiemElement = document.getElementById('meridiem');
const toggleFormatButton = document.getElementById('toggle-format');
const fontSizeInput = document.getElementById('font-size');
const clockColorInput = document.getElementById('clock-color');
const alarmTimeInput = document.getElementById('alarm-time');
const setAlarmButton = document.getElementById('set-alarm');
const clearAlarmButton = document.getElementById('clear-alarm');
const alarmMessage = document.getElementById('alarm-message');

let is24HourFormat = JSON.parse(localStorage.getItem('is24HourFormat')) || false;
let alarmTime = localStorage.getItem('alarmTime') || null;

// Initialize preferences
timeElement.style.color = localStorage.getItem('clockColor') || '#000000';
timeElement.style.fontSize = `${localStorage.getItem('fontSize') || 32}px`;
fontSizeInput.value = parseInt(localStorage.getItem('fontSize')) || 32;
clockColorInput.value = localStorage.getItem('clockColor') || '#000000';

// Function to format time
function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let meridiem = '';

    if (!is24HourFormat) {
        meridiem = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert 24-hour to 12-hour format
    }

    return {
        time: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
        meridiem: meridiem
    };
}

// Update clock every second
function updateClock() {
    const now = new Date();
    const { time, meridiem } = formatTime(now);

    timeElement.textContent = time;
    meridiemElement.textContent = meridiem;

    // Check if the alarm time matches
    if (alarmTime && `${now.getHours()}:${now.getMinutes()}` === alarmTime) {
        alarmMessage.textContent = 'Alarm ringing!';
        alarmTime = null; // Reset alarm after it rings
        localStorage.removeItem('alarmTime');
    }
}

// Toggle between 12/24 hour format
toggleFormatButton.addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    localStorage.setItem('is24HourFormat', is24HourFormat);
});

// Update font size
fontSizeInput.addEventListener('input', (e) => {
    const fontSize = e.target.value;
    timeElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem('fontSize', fontSize);
});

// Update clock color
clockColorInput.addEventListener('input', (e) => {
    const color = e.target.value;
    timeElement.style.color = color;
    localStorage.setItem('clockColor', color);
});

// Set alarm
setAlarmButton.addEventListener('click', () => {
    const alarmValue = alarmTimeInput.value;
    if (alarmValue) {
        alarmTime = alarmValue;
        localStorage.setItem('alarmTime', alarmTime);
        alarmMessage.textContent = `Alarm set for ${alarmTime}`;
    } else {
        alarmMessage.textContent = 'Please set a valid alarm time!';
    }
});

// Clear alarm
clearAlarmButton.addEventListener('click', () => {
    alarmTime = null;
    localStorage.removeItem('alarmTime');
    alarmMessage.textContent = 'Alarm cleared.';
});

// Start clock
setInterval(updateClock, 1000);
updateClock(); // Run immediately
