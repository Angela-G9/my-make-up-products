# Maybelline Product List Application

This project is a web application for browsing and filtering Maybelline products. It allows users to view a list of products from an external API and a local database, filter products based on various criteria, and toggle between light and dark modes.

---

## Features

- **Product Listing**: Displays products fetched from the [Makeup API](https://makeup-api.herokuapp.com/) and a local database.
- **Filtering**: Users can filter products by brand, product type, price range, and minimum rating.
- **Dark Mode**: Includes a toggle to switch between light and dark themes, with preferences saved in `localStorage`.
- **Responsive Design**: The application is mobile-friendly and adjusts layout for various screen sizes.
- **Interactive Buttons**:
  - "Buy Now" redirects to the product purchase link.
  - "View Details" displays product instructions in an alert box.

---

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling, including dark mode support.
- **JavaScript**: Application logic for fetching data, filtering products, and handling user interactions.

---

## Getting Started

### Prerequisites

1. **Local Server**: You need a local server to serve the `db.json` file for the local database (e.g., [JSON Server](https://github.com/typicode/json-server)).
2. **Modern Web Browser**: Ensure you use a browser that supports ES6+ JavaScript features.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd maybelline-product-list
   ```

3. Start the local server for `db.json`:
   ```bash
   json-server --watch db.json --port 3000
   ```

4. Open `index.html` in a browser or use a live server extension (e.g., in VS Code).

---

## Usage

1. **View Products**:
   - The product list is fetched and displayed when the application loads.
   
2. **Apply Filters**:
   - Enter filter criteria (e.g., brand, price range) in the input fields and click "Apply Filters."
   - The product grid will update based on the filters.

3. **Dark Mode**:
   - Click the "Toggle Dark Mode" button to switch themes.

4. **Buy Now / View Details**:
   - Use the "Buy Now" button to visit the product page.
   - Click "View Details" to see more information about the product in a popup.

---

## Project Structure

```plaintext
project-folder/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── index.js            # JavaScript logic
├── db.json             # Local database (JSON Server)
├── README.md           # Project documentation
```

---

## API Reference

### External API
- **Endpoint**: `https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`
- **Description**: Fetches Maybelline products from the Makeup API.

### Local Database
- **Endpoint**: `http://localhost:3000`
- **Description**: Fetches locally stored products from the `db.json` file.
