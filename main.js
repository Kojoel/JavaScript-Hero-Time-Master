const digitalClock = document.querySelector('.digital-clock');
const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

// console.log(hour.textContent, minutes.textContent, seconds.textContent);

const date = new Date()
console.log(date);

const myhours = date.getHours();
const myminutes = date.getMinutes();
const myseconds = date.getSeconds();
console.log(myhours);
console.log(myminutes);
console.log(myseconds);

const mydate = date.toLocaleDateString();
console.log(mydate);

//Object Oriented Clock
function clock() {
    this.hours = myhours;
    this.minutes = myminutes;
    this.seconds = myseconds;
}

//Accessing properties of instance newClock
const newClock = new clock();
// console.log(newClock.hours);
// console.log(newClock.minutes);
// console.log(newClock.seconds);



