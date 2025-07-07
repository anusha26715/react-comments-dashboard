# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# React Comments Dashboard

## 🔍 Project Overview
A modern, mobile-optimized React application built to simulate a real-world dashboard scenario. It includes a profile screen and a data-driven comments dashboard with fully custom-built pagination, search, and sorting logic.

## ✨ Key Features
- Custom pagination (10, 50, 100 records/page)
- Search by name, email, and phone (partial match)
- Column-based sorting with cyclic mode (ASC → DESC → None)
- Persistent state via localStorage (search, sort, pagination)
- React Router-based navigation between Profile and Dashboard
- Responsive UI with cross-browser compatibility
- Developed using JavaScript (or TypeScript, if used)

## 🧩 Project Features

### ✅ Profile Page
- Fetches the **first record** from the users dummy API
- Displays non-editable profile information
- Simple **Back to Dashboard** navigation
- Integrated with **React Router**

### ✅ Comments Dashboard
- Loads **500 comments** from dummy API
- Implements custom-built:
  - **Pagination** (page sizes: 10, 50, 100) without using any UI library
  - **Partial Search** on name, email, and phone
  - **Sorting** for Post ID, Name, and Email
    - Sort cycles: `No Sort → Ascending → Descending → No Sort`
    - Only one column is sortable at a time
- **Persisted Filters**: Page, Page size, Search, Sort saved in `localStorage`

## 🔧 Tech Stack
- React (CRA)
- JavaScript / TypeScript (optional)
- CSS / Tailwind / Bootstrap
- React Router DOM
- localStorage for client-side state persistence

## 🧠 Learning Outcomes
- Implemented real-world UI behavior from scratch (pagination/sorting)
- Deepened understanding of component state and lifecycle
- Practiced clean code, reusability, and project structuring
- Gained experience with dynamic rendering and performance optimization

## 📁 Project Setup
```bash
npm install
npm start
