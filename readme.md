# Recipes APP

## Overview
A full-stack MERN (MongoDB, Express, React, Node.js) application for managing and sharing recipes.

## Features
- User authentication and authorization
- Create, read, update, and delete recipes
- Search and filter recipes by cuisine, ingredients, or difficulty
- Rate and review recipes
- Responsive design for mobile and desktop

## Tech Stack
- **Frontend**: React, Redux, Axios, CSS/Bootstrap
- **Backend**: Node.js, Express.js, JWT authentication
- **Database**: MongoDB
- **Tools**: Git, npm/yarn

## Installation

### Prerequisites
- Node.js (v14+)
- MongoDB local instance or Atlas connection
- npm or yarn

### Setup
```bash
# Clone repository
git clone < https://github.com/Bhuviofficial/Recipes-APP >
cd "Recipes APP"

# Install dependencies
npm install

# Configure environment variables
# Create .env file in root directory

# Start development server
npm start
```

## Project Structure
```
Recipes APP/
├── client/          # React frontend
├── server/          # Express backend
├── models/          # MongoDB schemas
└── routes/          # API endpoints
```

## API Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/recipes` - Get all recipes
- `POST /api/recipes` - Create recipe
- `PUT /api/recipes/:id` - Update recipe
- `DELETE /api/recipes/:id` - Delete recipe

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open a pull request

## License
MIT License

## API Documentation

For detailed API documentation, visit [API Docs](https://documenter.getpostman.com/view/50347547/2sB3dLSqdr)