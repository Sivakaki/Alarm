# Alarm Clock

A modern and responsive Alarm Clock web application built using HTML, CSS, and JavaScript. Users can set multiple alarms, manage them individually, and receive an audio notification when an alarm is triggered.

## Features

* Real-time digital clock
* Set multiple alarms
* Prevent duplicate alarms
* Delete individual alarms
* Stop alarm sound manually
* Clear all alarms at once
* Responsive design for desktop and mobile devices
* Modern glassmorphism user interface
* Looping alarm sound until stopped

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

## Project Structure

```
Alarm-Clock/
│
├── index.html
├── style.css
├── script.js
└── sounds/
    └── soundreality-alarm-471496.mp3
```

## How It Works

1. The digital clock updates every second using JavaScript's `Date` object.
2. Users select a time using the time input field.
3. Clicking the **SET** button adds the selected time to the alarm list.
4. The application continuously checks the current time.
5. When the current time matches an alarm:

   * The alarm sound starts playing.
   * The triggered alarm is automatically removed from the list.
6. Users can:

   * Delete individual alarms using the X button.
   * Stop the alarm sound using the **STOP** button.
   * Remove all alarms using the **CLEAR** button.

## UI Features

* Dark gradient background
* Glassmorphism card design
* Interactive buttons with hover effects
* Custom scrollbar styling
* Mobile-friendly responsive layout

## Responsive Design

The application automatically adapts to smaller screen sizes:

* Flexible container width
* Reduced clock size on mobile devices
* Vertically stacked buttons for better usability

## Setup Instructions

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Open the project folder.

3. Ensure the alarm sound file exists in:

```text
sounds/soundreality-alarm-471496.mp3
```

4. Open `index.html` in your browser.

## Preview

A sleek digital alarm clock interface with support for multiple alarms and real-time notifications.

## License

This project is open source and available for educational and personal use.
