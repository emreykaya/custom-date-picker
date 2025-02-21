// Select DOM elements
const datePickerElement = document.querySelector('.date-picker');
const selectedDateElement = document.querySelector('.date-picker .selected-date');
const datesElement = document.querySelector('.date-picker .dates');
const mthElement = document.querySelector('.date-picker .dates .month .mth');
const nextMthElement = document.querySelector('.date-picker .dates .month .next-mth');
const prevMthElement = document.querySelector('.date-picker .dates .month .prev-mth');
const daysElement = document.querySelector('.date-picker .dates .days');

// Array of month names
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Initialize date values
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

// Initialize selected date, day, month, and year
let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

// Set the current month and year in the month element
mthElement.textContent = months[month] + ' ' + year;

// Display the selected date in the UI
selectedDateElement.textContent = formatDate(date);
selectedDateElement.dataset.value = selectedDate;

// Populate the calendar with days
populateDates();

// Event Listeners
datePickerElement.addEventListener('click', toggleDatePicker); // Toggle calendar visibility when clicked
nextMthElement.addEventListener('click', goToNextMonth); // Navigate to next month
prevMthElement.addEventListener('click', goToPrevMonth); // Navigate to previous month

// FUNCTIONS

// Toggle visibility of the date picker calendar
function toggleDatePicker(e) {
    // Check if the click happened outside the date picker container
    if (!checkEventPathForClass(e.composedPath(), 'dates')) {
        datesElement.classList.toggle('active'); // Show or hide the calendar
    }
}

// Move to the next month in the calendar
function goToNextMonth(e) {
    month++;
    if (month > 11) { // If month goes past December, move to January and increment the year
        month = 0;
        year++;
    }
    mthElement.textContent = months[month] + ' ' + year; // Update the displayed month and year
    populateDates(); // Re-populate the days for the new month
}

// Move to the previous month in the calendar
function goToPrevMonth(e) {
    month--;
    if (month < 0) { // If month goes past January, move to December and decrement the year
        month = 11;
        year--;
    }
    mthElement.textContent = months[month] + ' ' + year; // Update the displayed month and year
    populateDates(); // Re-populate the days for the new month
}

// Populate the calendar with days for the selected month and year
function populateDates(e) {
    daysElement.innerHTML = ''; // Clear any previous days

    // Set number of days in the current month (assuming 31 days initially)
    let amounthDays = 31;

    // Adjust for February (28 days in a non-leap year)
    if (month == 1) {
        amounthDays = 28;
    }

    // Loop through each day and create the corresponding day element
    for (let i = 0; i < amounthDays; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i + 1; // Day starts from 1

        // Highlight the selected day
        if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
            dayElement.classList.add('selected');
        }

        // Add event listener to handle day selection
        dayElement.addEventListener('click', function() {
            selectedDate = new Date(year, month, i + 1);
            selectedDay = i + 1;
            selectedMonth = month;
            selectedYear = year;

            // Update the displayed selected date
            selectedDateElement.textContent = formatDate(selectedDate);
            selectedDateElement.dataset.value = selectedDate;

            populateDates(); // Re-populate the calendar with updated selected day
        });

        // Append the day element to the days container
        daysElement.appendChild(dayElement);
    }
}

// HELPER FUNCTIONS

// Check if the click event path includes an element with the given class name
function checkEventPathForClass(path, selector) {
    for (let i = 0; i < path.length; i++) {
        if (path[i].classList && path[i].classList.contains(selector)) {
            return true; // Found the class in the event path
        }
    }
    return false; // No matching class found
}

// Format the date as "dd / mm / yyyy"
function formatDate(d) {
    let day = d.getDate();
    if (day < 10) {
        day = '0' + day; // Add leading zero for single digit days
    }

    let month = d.getMonth() + 1;
    if (month < 10) {
        month = '0' + month; // Add leading zero for single digit months
    }

    let year = d.getFullYear(); // Get the full year

    return day + ' / ' + month + ' / ' + year; // Return formatted date
}
