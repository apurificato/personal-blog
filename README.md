# Personal Blog Sample Website

## Description

The purpose of this project was to complete a simple, 2-page website challenge, built in the form of a personal blog which will showcase dynamically rendering content and explore working with and manipulating the DOM and web browser through local storage and Javascript.


This changes will have multiple benefits: allowing for the user of the website to add input data to the site on a landing page containing a form with labels and inputs for username, blog title, and blog content. This text content will then be saved in local storage while simultaneously being displayed on the front end of the browser webpage.

The way that the Javascript code works in this project is for it to ultimately be inserted and appended to parts of the HTML file, allowing for new content to be displayed on the front end on a separate posts webpage that the user will be redirected to (after data is collected on the landing page).

Additionally, the website will have a light and dark mode feature, enabling the user to toggle between each of those modes: choice between the theme for a light mode or the theme for a dark mode.

This project helped me learn more of vanilla Javascript basics. This includes utilizing Javascript as a toolset for manipulating objects in the HTML document and browser window/ DOM. Additionally, it further helped me practice creating Javascript functions and how those functions can be used to program with Javascript in a way that is potentially useful.

## Installation and Usage

This webpage (with updated code) is deployed and ready to be viewed. Use DevTools and Inspect on a web browser in order to view the Javascript updates (as well as HTML or CSS code of the page, if interested), when viewing in a web browser such as Chrome.

As far as usage goes, click the "Add Employees" button in order to start the process of collecting employee information/data. This will take user through a series of prompts requiring input that will be stored and displayed in the browser console, as well as on the front end of the webpage, inserted into the Employee Roster table. That table will collect and display the employees' first name, last name, and salary.

Additionally, the browser console will also display the average salary information, calculated from all of the employees (and their inputed salaries), depending on what or how much information the user decides to input, based on their interaction with this application. 

Code used on this webpage/project can be found at:

https://github.com/apurificato/employee-payroll-tracker

Deployed/live webpage:

https://apurificato.github.io/employee-payroll-tracker

## Features

This webpage has a button that triggers an event, which includes a series of prompts requiring the user to input specific data/information. That information is then collected, stored, and display in the browser dev tools console, as well as inserted into the Employee Roster table on the front end of the webpage (in the browser window).

## Credits

Code changed made by Anthony Purificato as part of a Rutgers Coding Bootcamp Assignment to learn the benefits and importance of using Javascript to write functions and in manipulating the DOM, browser window, and HTML with Javascript programming and object methods.

Original Code was pulled from repository on GitLabs created for Rutgers Coding Bootcamp and accessible by Rutgers Coding Bootcamp students. 

## License

See the license included in this project's repository, as this repo utilizes an MIT license. 




2-page website challenge completed and built in the form of a personal blog to showcase dynamically rendering content and explore working with the DOM.

GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page.
WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post.
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.