# 🚗 TravelEase: Vehicle Booking & Trip Management Platform

**TravelEase** is a comprehensive, modern web application designed for seamless vehicle booking and trip management. Whether you're looking for an SUV for a family trip or an electric car for a weekend getaway, TravelEase connects users with vehicle owners in a simple, secure, and intuitive platform.

## 🔗 Live Site & Server Links

**Client Live Site** | [https://travelease-vehicle-booking.netlify.app] |
**Server API** | [https://travel-ease-server-three.vercel.app]

-----

## Key Features

  * **Robust Authentication:** Secure user management powered by **Firebase**, supporting both Email/Password and one-click Google Sign-In.
  * **Dynamic Filtering & Sorting:** Users can easily browse vehicles with advanced client-side filters based on **Category**, **Location**, and **Price** sorting.
  * **Intuitive Booking System:** Seamless vehicle booking process allowing logged-in users to manage and view their booked vehicles.
  * **Owner & User Dashboards:** Dedicated sections for users to **Add Vehicles**, manage their listings (`My Vehicles`), and track all reservations (`My Bookings`).
  * **Responsive & Themed UI:** A fully responsive design built with **React, Tailwind CSS, and DaisyUI**, featuring a modern **Light/Dark Mode** switcher.

-----

## 🛠️ Technologies Used

### Client-Side (Frontend)

  * **React (v19.x):** For building the component-based user interface.
  * **React Router (v7.x):** For declarative routing and navigation.
  * **Tailwind CSS & DaisyUI (v5.x):** For rapid and themeable styling.
  * **Framer Motion:** For smooth, subtle page animations and transitions.
  * **Swiper:** For implementing carousels and banners (e.g., vertical scroll on the home page).

### Backend & Database

  * **Node.js / Express:** (Implied, hosting the Vercel API).
  * **MongoDB:** (Implied, handling data storage for vehicles and bookings).

### Authentication & Deployment

  * **Firebase:** Authentication services for user sign-in/sign-up.
  * **Netlify:** Hosting and continuous deployment for the client application.
  * **Vercel:** Hosting for the server/API.

## 📦 Dependencies

### Frontend & Core:

  * React
  * React Router DOM
  * Tailwind CSS
  * DaisyUI

### Authentication & API:

  * Firebase (Auth)
  * Axios

### Styling & UI Enhancements:

  * Google Fonts (Epilogue, Sora)
  * Tailwind Plugins

## 🚀 Front-End Installation Guide

### Requirements

 * Node.js >= 18.x
 * npm >= 9.x
 * Git

### Clone the repository

 * git clone https://github.com/your-username/your-repo-name.git

### Navigate to the project folder

 * cd your-repo-name

### Install dependencies

 * npm install

### Set up environment variables (if any)

 * Create a .env file in the root folder

 * Add required variables (API URLs, keys, etc.)
Example:

 * VITE_API_URL=https://api.example.com


### Run the development server

 * npm run dev


### Open in your browser

 * Access the app at: http://localhost:5173 (or as shown in terminal)
