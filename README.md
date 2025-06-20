# Angular Login & Register Project

This project is a modern Angular application that demonstrates a clean, user-friendly authentication interface with the following features:

## Features

- **Angular Standalone Components**: Uses Angular's latest standalone component architecture for modularity and simplicity.
- **Responsive Navbar**: A top navigation bar with links for Login and Register, styled with SCSS and using Angular's router for navigation. The active link is automatically highlighted based on the current route.
- **Login Page**:
  - Template-driven form with real-time validation.
  - Email field: required, must match email format (regex).
  - Password field: required, must be at least 8 characters, include an uppercase letter, a number, and a special character (regex).
  - Error messages and input border colors update live based on user interaction and validation state.
  - Login button is disabled until the form is valid.
  - On successful login, the form resets to its default state.
- **Register Page**:
  The Register form includes:
  - Name: Required, only letters and spaces, minimum 3 characters.
  - Email: Required, must be a valid email format.
  - Username: Required, no spaces allowed.
  - Password: Required, at least 8 characters, must include uppercase, number, and special character.
  - Confirm Password: Required, must match the password.
  - **Addresses**: Dynamic list, each with Address, Street, City, Country (all required). Only the last address group is editable until completed. Users can add or remove address groups. Validation and error messages are shown for each field.
  - Reactive form with real-time validation and modern layout.
  - Name, Email, Username, Password, and Confirm Password fields, all with validation and live error messages.
  - Custom password confirmation validator ensures passwords match.
  - **Dynamic Addresses**: Users can add multiple addresses (Address, Street, City, Country) using a FormArray. Each address group is validated, and only the last group is editable until completed.
  - Add and Delete buttons for address groups, with modern styling and validation feedback.
  - After successful registration, the form resets to its initial state with one empty address group.
- **SCSS Styling**:
  - All styles are written in SCSS with proper nesting and variables for maintainability.
  - Visual feedback for form validation using Angular's built-in classes (e.g., `.ng-invalid.ng-dirty`).
  - Custom button styles for Add and Delete actions.
- **Routing**:
  - Angular Router is used for navigation between Login and Register pages.
  - Default route redirects to Login.
  - Navbar active state is always in sync with the current route.

## How It Works

- Users can navigate between Login and Register using the navbar.
- The Login form provides instant feedback and only allows submission when all fields are valid.
- The Register form supports dynamic address entry and strong validation. After submitting, the form resets to its default state (one empty address group).

## Technologies Used

- Angular (standalone components, Angular 17+)
- Angular Router
- SCSS for styling

## Getting Started

1. Install dependencies: `npm install`
2. Start the development server: `npm start`
3. Open your browser at the provided local address to use the app.

---

This project is ideal for learning modern Angular form handling, validation, and routing best practices with a focus on clean code and user experience.

![Login Page](image-2.png)
![Register Page](image.png)
