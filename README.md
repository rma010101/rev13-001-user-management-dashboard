# User Management React App

A simple user management application built with React and Vite. This app demonstrates modern React patterns, modal portals, and user CRUD operations with a clean, responsive UI.

## Key Components

### 1. `UserList`
- Displays a list of users with Update and Delete buttons.
- Clicking a user opens a modal with their details.
- Update and Delete actions are handled with confirmation modals.
- Uses CSS classes for button styling and hover effects.

### 2. `UserDetails`
- Modal portal for viewing and editing user details.
- Supports inline editing of name, email, phone, and avatar filename.
- Avatar image is shown on the left, aligned with the header.
- Uses React state for form control and updates.

### 3. `AddUserForm`
- Controlled form for adding new users.
- Fields: Name, Email, Phone, Avatar filename.
- On submit, adds the user and navigates back to the user list.

### 4. Modal Portal Pattern
- All modals (user details, delete confirmation) use ReactDOM.createPortal to render into a dedicated DOM node (`modal-root`).
- Ensures modals overlay the main content and are accessible from anywhere in the app.

### 5. Styling
- Button styles and hover effects are managed in `UserList.css`.
- Layout uses flexbox for alignment and spacing.
- Avatar and content are aligned for a professional look.

## Features
- View, add, update, and delete users.
- Inline editing in modal with instant feedback.
- Avatar support: specify an image filename from the `public` folder.
- Delete confirmation modal to prevent accidental removal.
- Responsive and accessible UI.

## How to Use
1. Place avatar images in the `public` folder (e.g., `avatar1.png`).
2. Use the Add User form to create new users, specifying the avatar filename if desired.
3. Click a user to view or edit details in a modal.
4. Use Update/Delete buttons for user management.

## Project Structure
```
public/
  avatar1.png
  default-avatar.png
src/
  components/
    AddUserForm.jsx
    UserList.jsx
    UserDetails.jsx
    UserList.css
  App.jsx
  main.jsx
index.html
vite.config.js
```

## Getting Started
1. Install dependencies:
   ```
   npm install
   ```
2. Start the development server:
   ```
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

This project is a learning exercise in advanced React component patterns, state management, and UI/UX best practices.
# Project Setup: Installations After `npm create vite@latest`

After creating your project with Vite, install the following dependencies for a React + Router + Axios setup:

```
npm install react react-dom
npm install react-router-dom
npm install axios
```

For development and linting, you may also see these in `devDependencies`:

```
npm install -D @vitejs/plugin-react vite eslint @eslint/js @types/react @types/react-dom eslint-plugin-react-hooks eslint-plugin-react-refresh globals
```

These packages provide React, routing, HTTP requests, and a modern development environment with Vite and ESLint.
# How to Add a User and Update the User List

1. **User State Management**
   - The list of users is now managed in `App.jsx` using React state.
   - The user list is fetched from the API on initial load and stored in state.

2. **Adding a User**
   - The `AddUserForm` component is a controlled form that takes `name` and `email` input.
   - When the form is submitted, it calls the `addUser` function (passed as a prop from `App.jsx`).
   - The new user is added to the top of the user list with a unique id.
   - After adding, the app navigates back to the User List page.

3. **User List Display**
   - The `UserList` component receives the users array as a prop and displays all users.
   - Clicking a user shows their details in a modal.

4. **Routing**
   - React Router is used to switch between the User List and Add User Form pages.
   - The "Add User" button on the User List page navigates to the form.

5. **Component Connections**
   - `App.jsx` passes `users` and `addUser` to the relevant components via props.
   - All user additions and updates are reflected immediately in the User List.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
