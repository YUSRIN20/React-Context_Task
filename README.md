# Mobile Store Cart Web Application with Context API

This is a simple web application for a mobile store. It allows users to manage their shopping cart. The application utilizes React's Context API to manage global state across components.

## Features

### 1. Navigation Bar

The navigation bar provides easy access to different sections of the website:
- **Cart**: Displays the total number of items in the user's shopping cart. Clicking on it redirects the user to their cart.

### 2. Product Listing

Products are displayed in a grid format, showing essential details such as product image, title, price, and available stock. Users can browse through the products and click on them to view more details.

### 3. Shopping Cart

Users can add products to their shopping cart by clicking on the "Add to Cart" button on the product detail page. The cart icon in the navigation bar shows the total number of items added to the cart. Users can also remove items from the cart or adjust the quantity of each item.

## Components

### 1. `App`

- **Description**: The main component of the application.
- **Responsibilities**:
  - Manages the state of the product data and shopping cart using the Context API.
  - Renders the navigation bar (`Navbar` component), total price, total quantity, and the `ConditionalRendering` component.

### 2. `Navbar`

- **Description**: Renders the navigation bar at the top of the page.
- **Props**:
  - `totalQuantity`: Total number of items in the user's shopping cart.

### 3. `ConditionalRendering`

- **Description**: Renders the list of products based on the data provided.
- **Context**: Uses the Context API to access the product data and manage the shopping cart state.
- **Child Components**: Uses `CartComp` component to render each product.

### 4. `CartComp`

- **Description**: Renders a single product in the cart with its details.
- **Props**:
  - `item`: Object representing the product details.
  - `index`: Index of the product in the list.
  - `increaseQuantity`: Handler function to increase the quantity of a product.

## Context API

- **Description**: Manages the global state of the product data and shopping cart across components.
- **Responsibilities**:
  - Provides a context provider (`myContext.Provider`) to share data with nested components.
  - Utilizes `useState` hook to manage the state of product data and shopping cart items.
  - Exports the context object (`myContext`) to be consumed by child components.

## Implementation Details

### Dynamic Price and Quantity Increase

- When the user increases the quantity of a product in the shopping cart, the price and quantity are dynamically updated.
- This functionality is implemented using the Context API to manage the state of the shopping cart across components.
- The `CartComp` component handles the logic for increasing the quantity and calculates the updated price based on the quantity and the original price of the product.

## Technologies Used

- **React**: A front-end library used for building user interfaces. React provides a component-based architecture that simplifies the development process and enhances code reusability.
- **Bootstrap**: A CSS framework that facilitates the creation of responsive and mobile-first web designs. Bootstrap offers pre-designed components and utilities for styling, layout, and interactive elements.
- **Font Awesome**: A library that provides a wide range of icons for web applications. Font Awesome icons enhance the visual appeal and usability of the application by providing scalable vector icons that can be easily customized and integrated into the UI.

## Demo

Check out the live demo [here](https://react-context-cart-demo.netlify.app/).

## Usage

To run the application locally:
1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and visit `http://localhost:3000` to view the application.

## Credits

This project was created by [YUSRIN20] as a practice exercise for learning React, Context API, and front-end development.

