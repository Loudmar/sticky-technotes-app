# Sticky TechNotes

This MERN web application was build as a substitute to the classic yellow stick note.\
In this web application, users will be able to create their own stick notes, update, delete,\
and re-assign stick notes to another users.\
Manager and Admin users have access to stick notes settings and users settings. They are able\
to create, update, view and delete notes and users accordingly.\
This function is hidden to non manager and non admin users, and they are not able to edit any other\ 
user's stick notes.

This project was built to practice working with **React**, **Redux**, **RTK Query** and **JWT Auth**\ 
for the front-end part.\
And **Node**, **Express** and **MongoDB** for the back-end **API** part.

## Usage

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
This project was deployed using Render for the server **API** [here](https://sticky-technotes-api.onrender.com).\
And deployed using Render for the **Client** [here](https://sticky-technotes-app.onrender.com).\

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

## Features

At the starting page, users will be able to log in, once logged in they will be re-directed to the\
dashboard. The dashboard is tailored to their employee status. Admins and Managers will have access to\
users and notes settings. As for employees, the dashboard will only display their own notes and the ability\
to create and re-assign notes. 

### Login Page
![The starting page for Log in.](src/img/user_login.png)

### Admin Dashboard
![The starting page for Admin dashboard.](src/img/admin_dash.png)

### Admin Notes settings
![The starting page for Admin dashboard.](src/img/admin_notes_settings.png)

### Admin Users settings
![The starting page for Admin dashboard.](src/img/admin_user_settings.png)

### Employee Dashboard
![The starting page for Admin dashboard.](src/img/employee_dash.png)

### Employee Add notes
![The starting page for Admin dashboard.](src/img/employee_add_notes.png)

### Employee Notes
![The starting page for Admin dashboard.](src/img/employee_notes.png)

## Future Development 

The Sticky Tech Notes project can be further developed to display the notes' content to the users\
as their hover over the notes. At the moment, the users will have to click in 'edit' to see it's content.\ 

## Sources

This project was created as part of [Codecademy's Fullstack Engineer](https://www.codecademy.com/learn) curriculum. 