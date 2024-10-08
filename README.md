# E-commerce React Project

This project is a React-based e-commerce application with various features and components.

## Project Structure

The project structure is organized as follows:

```
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   │   └── Navbar.js
│   ├── pages
│   │   ├── CardProduct.js
│   │   ├── Cart.js
│   │   ├── Home.js
│   │   └── Products.js
│   ├── photos
│   └── rtk
│       ├── reducers
│       └── store.js
└── db.json
```

## Setup and Running the Project

1. Clone the repository to your local machine.

2. Install dependencies:
   ```
   npm install
   ```

3. Start the JSON Server:
   Navigate to the project root directory and run:
   ```
   npx json-server --watch db.json --port 3000
   ```
   This will start the mock API server using the `db.json` file.

4. In a new terminal, start the React development server:
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Features

- Home page (`Home.js`)
- Product listings (`Products.js`)
- Individual product cards (`CardProduct.js`)
- Shopping cart functionality (`Cart.js`)
- Navigation component (`Navbar.js`)

## State Management

This project uses Redux Toolkit (RTK) for state management. The store configuration can be found in `src/rtk/store.js`, and reducers are located in the `src/rtk/reducers` directory.

## Additional Notes

- Make sure to keep the JSON Server running alongside the React application for proper functionality.
- The `photos` directory contains images used in the project.
- Customize the `manifest.json` file for PWA settings if needed.

## Contributing

Feel free to submit issues and pull requests to improve the project.
