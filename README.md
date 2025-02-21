# Custom Date Picker

This repository contains the code for a custom date picker implemented using HTML, CSS, and JavaScript.

## Overview

This custom date picker allows users to select a date from a calendar UI. The calendar displays the current month, and users can navigate through months by clicking on the arrows. The selected date is highlighted, and the formatted date is displayed at the top.

### Features:
- **Month Navigation:** Navigate between months using the left and right arrows.
- **Date Selection:** Click on a date to select it, which will be displayed in the selected date area.
- **Custom Styling:** The calendar has a modern, minimal design with custom styling for the month and date navigation.

## File Structure

- **index.html**: The main HTML file that structures the date picker UI.
- **main.css**: The stylesheet that defines the custom styles for the date picker.
- **main.js**: The JavaScript file that provides the functionality for date selection, month navigation, and formatting.

## How It Works

1. **HTML (`index.html`):**
   - Contains the structure of the date picker UI, including the header, month navigation, and day grid.
   - Links to external Google Fonts for styling.
   
2. **CSS (`main.css`):**
   - Defines the layout and styling of the date picker, including the colors, sizes, and hover effects.
   - Customizes the appearance of the calendar, selected dates, and month navigation.

3. **JavaScript (`main.js`):**
   - Handles the functionality of the date picker.
   - Manages month navigation, day population, and date selection.
   - The date format is handled by a helper function to display the date in `dd / mm / yyyy` format.

## Usage

1. Clone or download this repository.
2. Open `index.html` in your web browser to view the custom date picker.
3. Interact with the calendar by clicking on the arrows to change the month, and click on a day to select a date.

## Note

This project was created with the knowledge gained through a training session provided by Tyler Potts.
