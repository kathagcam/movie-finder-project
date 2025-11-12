🎬 **Movie Finder - A Dynamic JavaScript Project**

A responsive, single-page web application for searching a large movie database. This project was built from scratch to demonstrate and practice modern JavaScript concepts, including DOM manipulation, state management, and asynchronous-style programming.

✨ **Features**

Multi-Field Live Search: A single search bar that filters movies based on title, director, genres, and cast members.

Data Flattening: A custom function that intelligently "flattens" complex, nested movie objects (with arrays for cast and genres) into a simple, searchable array.

Client-Side Pagination: A robust "Next" and "Previous" button system to manage and display a large dataset (50+ movies) in clean, 8-item pages.

Dynamic DOM Rendering: All movie "cards" are built and rendered to the page using JavaScript (document.createElement and .append()). The page never has to reload.

State Management: The app maintains a central "state" for the current search results and page number, which all functions reference.

Dual Event Handling: The search is triggered by both clicking the "Search" button and pressing the "Enter" key in the input field.

Defensive Coding: The code gracefully handles missing data (e.g., a movie with no director or genres) and provides clean fallback text (like "N/A").

🚀 **How to Run This Project Locally**

You can run this project in two ways.

Method 1: The Simple Way (Double-Click)

This project is self-contained and has no server-side dependencies.

Download all four files (index.html, style.css, movies.js, script.js) into a single folder on your computer.

Open the folder in your file explorer.

Double-click the index.html file.

The project will open and run in your default web browser.

Method 2: The Professional Way (Using a Local Server)

This is the standard way developers work, as it simulates a real web environment (using http:// instead of file:///).

Open your Mac Terminal.

Navigate into your project folder using the cd command.

# Example: if your folder is on your Desktop
```cd Desktop/MovieFinder```

Start Python's built-in web server (this is the "waiter" we discussed):

```python3 -m http.server```

Open your web browser and go to this address:
```http://localhost:8000```

💡 **Key Learning Concepts**

This project was a fantastic exercise in "connecting the dots." The core of this application is built on the following JavaScript concepts:

- DOM Manipulation (The "How"): Building the renderMovies() function from scratch using document.createElement(), element.setAttribute(), element.textContent, and container.append().

- Complex Data Transformation (The "Prep"): Creating the filterMovies() function, which uses nested for...of loops to flatten complex objects with nested arrays into a single, searchable array (the "search card").

- Event Handling & "Conductor" Functions: Using addEventListener for both click and keydown events. Both events call a single "conductor" function (handleSearch) that is responsible for coordinating the other functions.

- State Management (The "Brain"): Using global-like variables (currentMovieList, currentPage) to hold the application's "state," and having all functions read from and write to this single source of truth.

- Array Methods (The "Tools"):

.filter(): As the main "bouncer" for the search.

.some(): As the efficient "test" to see if any item in a searchCard matches the search text.

.map(): As the "factory" to turn the final list of movie objects into a list of HTML strings (in the "shortcut" version).

.slice(): As the tool to "slice" the main movie list into 10-item pages for pagination.
