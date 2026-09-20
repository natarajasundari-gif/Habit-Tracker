# 💛 Habit Tracker

A simple, interactive monthly habit tracker built with **HTML, CSS, and JavaScript**.

The application lets you set a habit, track your progress day by day, and stores your progress using the browser's `localStorage`, so your data remains available when you reopen the page.

## ✨ Features

* 📅 Automatically detects the current month and year.
* 🗓️ Automatically determines the number of days in the current month.
* 🐸 Handles leap years correctly.
* ✏️ Click the habit title to set or change your habit.
* ✅ Click a day to mark it as completed.
* 🔄 Click the same day again to unmark it.
* 💾 Uses `localStorage` to save daily progress.
* 📊 Displays the number of completed days.
* 🔁 Reset button to clear the current month's progress.
* 📱 Responsive layout for different screen sizes.
* 💛 Automatically highlights the current month.

## 🛠️ Technologies Used

* **HTML5** - Structure of the webpage
* **CSS3** - Styling and responsive layout
* **JavaScript** - Calendar logic, interaction, and data storage
* **localStorage** - Persistent habit data
* **Google Fonts** - Edu NSW ACT Cursive

## 📂 Project Structure

```text
Habit-Tracker/
│
├── index.html
├── script.js
└── img/
    └── pika.jpg
```

## 🚀 How to Run

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in a browser.

No server or additional installation is required.

## 🧠 How It Works

When the page loads, JavaScript creates a `Date` object and extracts:

* Current month
* Current date
* Current year

The month is then displayed automatically.

The application also calculates the number of days in the current month. Leap years are handled using the standard Gregorian leap-year rules.

### Habit

Clicking the habit title opens a prompt where you can enter your habit.

For example:

```text
My new Habit → Read 20 pages
```

### Daily Tracking

Each day is represented by a clickable calendar cell.

When a day is clicked:

```text
Incomplete → Completed
Completed → Incomplete
```

The corresponding state is stored in `localStorage`.

### Data Storage

Each date is stored using a key based on:

```text
month-day-year
```

For example:

```text
9-20-2026
```

The value is stored as either:

```text
"true"
```

or

```text
"false"
```

This allows the tracker to remember completed days even after the browser page is refreshed.

## 🔄 Reset

The **Reset** button clears the completion status for every day in the current month and resets the completed-day counter to:

```text
0 / total days
```

## 📱 Responsive Design

The calendar uses CSS media queries to adapt its dimensions for:

* Mobile devices
* Tablets
* Laptops
* Large desktop screens

The basic visual design remains the same while the calendar dimensions and spacing adjust according to the screen size.

## 🎯 Future Improvements

Possible improvements for future versions:

* Save the habit name using `localStorage`.
* Add multiple habits.
* Add weekly and yearly statistics.
* Add streak tracking.
* Add progress visualization.
* Add different habit colors.
* Add previous/next month navigation.
* Add animations and improved accessibility.
* Add a dark mode.

## 📌 Current Limitations

* Only one habit can currently be tracked.
* The tracker focuses on the current month.
* Habit name persistence has not been implemented.
* Data is stored locally in the browser and is not synchronized across devices.

## 📄 License

This project is intended for learning and personal use.
