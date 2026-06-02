# To-Do List Application

## Overview

I developed a full-stack To-Do List application using React for the frontend, Node.js and Express.js for the backend, and MongoDB Atlas as the database. The application allows users to create, view, update, and delete tasks. The frontend communicates with the backend through REST APIs.

## Technologies Used

### Frontend

* React
* Vite
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

## Features

* Add a new task
* View all tasks
* Update an existing task
* Delete a task
* Store tasks permanently using MongoDB Atlas

## Project Structure

Frontend and backend are maintained in separate folders.

```text
project-root
│
├── todo-frontend
│
└── todo-backend
```

## Setup Instructions

### Backend Setup

1. Open a terminal inside the backend folder.

2. Install dependencies.

```bash
npm install
```

3. Create a `.env` file and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

4. Start the backend server.

```bash
npm run dev
```

### Frontend Setup

1. Open a terminal inside the frontend folder.

2. Install dependencies.

```bash
npm install
```

3. Create a `.env` file and add:

```env
VITE_URL=your_backend_url/api/todos
```

4. Start the frontend application.

```bash
npm run dev
```

## API Endpoints

| Method | Endpoint       |
| ------ | -------------- |
| GET    | /              |
| POST   | /api/todos     |
| GET    | /api/todos     |
| PUT    | /api/todos/:id |
| DELETE | /api/todos/:id |

## Deployment

Frontend Deployment Link:

* https://assignment81234.netlify.app/

Backend Deployment Link:

* https://assignment-8-izt2.onrender.com

GitHub Repository:

* https://github.com/DeepRulz/Assignment-8

## Challenges Faced

One challenge I faced was understanding how the frontend and backend communicate using API requests. Initially, I had issues with update requests because the HTTP methods used in the frontend and backend did not match.

Another challenge was working with MongoDB document IDs during update and delete operations. After understanding how MongoDB automatically generates unique IDs, I was able to correctly pass them from the frontend to the backend.

I also faced some deployment-related issues while configuring environment variables and connecting the deployed frontend with the deployed backend. These issues were resolved by updating the API URL and checking the CORS configuration.

## Author

Deep Shah
