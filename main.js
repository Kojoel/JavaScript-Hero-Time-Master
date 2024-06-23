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

//Adding new methods to clock object
Object.defineProperties(clock.prototype, {
    getFormattedTime: {
        value: function() {
            const formattedHours = this.hours.toString().padStart(2, '0');
            const formattedMinutes = this.minutes.toString().padStart(2, '0');
            const formattedSeconds = this.seconds.toString().padStart(2, '0');
    
            return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        },
        writeable: true,
        configuration: true,
        enumerable: false
    },
    get12HourTime: {
        value: function() {
            let timePeriod = "AM";
            if(this.hours >= 12){
                timePeriod = "PM"
                if(this.hours > 12){
                    this.hours -= 12;
                }
            } else if(this.hours === 0){
                this.hours = 12;
            }
            return timePeriod;
        },
        writeable: true,
        configuration: true,
        enumerable: false
    }
})

// console.log(clock);
// console.log(newClock.getFormattedTime());
// console.log(newClock.get12HourTime());
// console.log(newClock.hours);

