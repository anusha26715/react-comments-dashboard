# Getting Started with Vite + React + TypeScript

This project was bootstrapped using [Vite](https://vitejs.dev/), with support for React and TypeScript.

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.  
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload automatically when you make changes.  
You may also see any build or lint errors in the console.

---

### `npm run build`

Builds the app for production using Vite.  
The production-ready files will be output to the `dist/` folder.

This build is optimized and minified for best performance.

---

### `npm run preview`

Locally preview the production build from the `dist/` folder.  
Useful to test your build before deployment.

---

## 📦 Project Structure





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
- Developed using JavaScript logic and TypeScript

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
- React (vite)
- JavaScript / TypeScript
- CSS / SCSS / Bootstrap
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
npm run dev
