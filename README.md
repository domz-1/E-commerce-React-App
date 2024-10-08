![image](https://github.com/user-attachments/assets/cd15ede5-f09e-4dd5-aef8-4117d901d53b)



# E-commerce React App

This is an E-commerce application built with React. It provides a modern and responsive user interface for online shopping experiences.

## Features

- Product listing
- Shopping cart functionality
- Responsive design

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 12.0 or later recommended)
- npm (Node Package Manager) or yarn

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/domz-1/E-commerce-React-App.git
   ```

2. Navigate to the project directory:
   ```
   cd E-commerce-React-App
   ```

3. Install the dependencies:
   ```
   npm install
   ```
   or if you're using yarn:
   ```
   yarn install
   ```

## Running the Application

1. Start the React development server:
   ```
   npm start
   ```
   or with yarn:
   ```
   yarn start
   ```

2. Open your browser and visit `http://localhost:3000` to view the application.

## Using JSON Server for the Database

This project uses JSON Server to simulate a REST API for the product database. Follow these steps to set it up:

1. If you haven't already, install JSON Server globally:
   ```
   npm install -g json-server
   ```

2. Navigate to the `public/db` directory:
   ```
   cd public/db
   ```

3. Start JSON Server and watch the `db.product.db` file:
   ```
   json-server --watch db.product.db --port 9000
   ```

This will start the JSON Server on port 3001, serving the product data from the `db.product.db` file.

## Contributing

Contributions to this project are welcome. Please fork the repository and create a pull request with your changes.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, please open an issue in the GitHub repository.
