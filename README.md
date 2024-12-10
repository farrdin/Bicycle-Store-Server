# Bicycle Store Management Server

This project is an Express-based RESTful API built with TypeScript and MongoDB. It is designed to manage a bicycle store, providing functionality to manage bicycles (products), handle customer orders, and track revenue. The application integrates MongoDB with Mongoose to handle schema validation and ensure data integrity.

> Live Link ➡️ https://bicyclee-store.vercel.app

## Features

- **Create, Read, Update, Delete (CRUD) for Bicycles**: Manage bicycles in the store inventory.
- **Order Management**: Handle customer orders and inventory updates.
- **Revenue Calculation**: Calculate total revenue from all orders using MongoDB aggregation.
- **Inventory Management**: Automatically adjust stock quantity and handle out-of-stock scenarios.
- **API Error Handling**: Comprehensive error handling with meaningful responses.

## Tech Stack

- **Frontend:** Not included in this project.
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB, Mongoose
- **Environment**: dotenv for configuration management
- **Other Tools:** ESLint, Prettier, Nodemon

## Project Setup

### Project Structure

![Code Example](https://i.ibb.co.com/m86qGXd/code.png)

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas account)
- Git

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/farrdin/Bicycle-Store-Server.git
   cd bicycle-store-server
   ```

2. **Install Dependencies**:

   Install project dependencies using npm or yarn:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   Create a `.env` file at the root of the project with the following content:

   ```env
   MONGODB_URI=mongodb://localhost:27017/bicycle-store
   PORT=5000
   ```

   If you're using MongoDB Atlas, replace `MONGODB_URI` with your Atlas connection string.

4. **Run the Application**:

   To start the server in development mode:

   ```bash
   npm run start:dev
   ```

   To GET the lint erros development mode:

   ```bash
   npm run lint
   ```

   To Fix the lint erros development mode:

   ```bash
   npm run fix
   ```

   The API will be available at `http://localhost:5000`.

5. **Build for Production** (optional):

   If you're deploying to production:

   ```bash
   npm run build
   npm run start:prod
   ```

## API Endpoints

### 1. Create a Bicycle

- **Endpoint**: `/api/products`
- **Method**: `POST`
- **Request Body**:

  ```json
  {
    "name": "Roadster 5000",
    "brand": "SpeedX",
    "price": 300,
    "type": "Road",
    "description": "A premium road bike designed for speed and performance.",
    "quantity": 20,
    "inStock": true
  }
  ```

- **Response**:

  ```json
  {
    "message": "Bicycle created successfully"
  }
  ```

### 2. Get All Bicycles

- **Endpoint**: `/api/products`
- **Method**: `GET`
- **Query Parameters**: `searchTerm` (Optional)

  Example: `/api/products?searchTerm=Road`

- **Response**:

  ```json
  {
    "message": "Bicycles retrieved successfully"
  }
  ```

### 3. Get a Specific Bicycle

- **Endpoint**: `/api/products/:productId`
- **Method**: `GET`
- **Response**:

  ```json
  {
    "message": "Bicycle retrieved successfully"
  }
  ```

### 4. Update a Bicycle

- **Endpoint**: `/api/products/:productId`
- **Method**: `PUT`
- **Request Body**:

  ```json
  {
    "price": 350,
    "quantity": 15
  }
  ```

- **Response**:

  ```json
  {
    "message": "Bicycle updated successfully"
  }
  ```

### 5. Delete a Bicycle

- **Endpoint**: `/api/products/:productId`
- **Method**: `DELETE`
- **Response**:

  ```json
  {
    "message": "Bicycle deleted successfully"
  }
  ```

### 6. Order a Bicycle

- **Endpoint**: `/api/orders`
- **Method**: `POST`
- **Request Body**:

  ```json
  {
    "email": "customer@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 600
  }
  ```

- **Response**:

  ```json
  {
    "message": "Order created successfully"
  }
  ```

### 7. Calculate Revenue from Orders

- **Endpoint**: `/api/orders/revenue`
- **Method**: `GET`
- **Response**:

  ```json
  {
    "message": "Revenue calculated successfully",
    "status": true,
    "data": {
      "totalRevenue": 1200
    }
  }
  ```

## Error Handling

The API includes comprehensive error handling. Common error responses include:

- **Validation Errors**: E.g., invalid price, quantity, email format, etc.
- **Not Found**: When a product or order does not exist.
- **Insufficient Stock**: When an order exceeds the available quantity.

## Contributing

1. Fork the repository.
2. Create a new branch:

   ```
   git checkout -b feature-name
   ```

3. Commit and push changes:
   ```
   git commit -m "Add feature-name"
   ```
   ```
   git push origin feature-name
   ```
4. Open a pull request.

## Contact

For inquiries, reach out to FardinAhmed.Dev@gmail.com
