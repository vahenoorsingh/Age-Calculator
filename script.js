const datepicker = require('js-datepicker');
const { DateTime, Duration } = require('luxon');

let selectedDate = new Date();
let luxonDate = DateTime.fromJSDate(selectedDate);
const ans = document.getElementById("answer");

const picker = datepicker('#my-date-input', {
    dateSelected: new Date(),
    position: 'bl', // 'br' for bottom right (one of many options) // Example: Restrict selection to dates after Jan 1, 2023
    onSelect: (instance, date) => {
        // This function runs every time a date is selected
        selectedDate = date;
        luxonDate = DateTime.fromJSDate(selectedDate);
    },
    maxDate: new Date(),
    formatter: (input, date, instance) =>{
        const value = date.toLocaleDateString();
        input.value = value;
    }
});
function calculate(){
    let difference = DateTime.now().diff(luxonDate,['years', 'months']).toObject();
    console.log(`You are ${difference.years} years and ${Math.floor(difference.months)} months old`)
    ans.textContent = `You are ${difference.years} years and ${Math.floor(difference.months)} months old`;
}
window.calculate = calculate;
