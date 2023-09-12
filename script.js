let timeElement = document.getElementsByClassName('timeEl');
const today = new Date();
const milliseconds = today.getTime();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = today.getDay();
const dayEl = document.getElementsByClassName('dayEl');
const dayName = daysOfWeek[dayOfWeek];

console.log(dayName);

timeElement[0].innerHTML = milliseconds;
dayEl[0].innerHTML = dayName;


