# Task Manager Application

This repository contains a Task Manager application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application provides users with the ability to manage and track their tasks effectively.

## Features

- **User Authentication:** Users can sign up, log in, and log out securely to access their personal task lists.
- **Task Management:** Users can create tasks, assign them titles, descriptions, and due dates. They can mark tasks as complete or delete them when no longer needed.


## Prerequisites

To run this application locally, ensure that you have the following software installed on your machine:

- Node.js (v12 or higher)
- MongoDB (running locally or a remote connection)
- Git

## Installation

Follow these steps to get the application up and running:

1. Clone the repository:

   ```bash
   git clone https://github.com/puter-nyaani-Soma/tasks.git
   ```

2. Install the dependencies:

   ```bash
   cd tasks
   npm install
   ```

3. Configuration:

   - Create a `.env` file in the backend directory of the project and provide the necessary environment variables:

     ```plaintext
     # Server Config
     PORT=<your-desired-port-number>
     MONGODB_URI=<your-mongodb-connection-string>
     SECRET=<your-jwt-secret>

  

4. Run the application:

   ```bash
   npm run frontend
   npm run backend
   ```

   This command will start both the server and client-side applications concurrently.

5. Access the application:

   Open your browser and navigate to `http://localhost:<your-port-no>` to access the Task Manager Application.

## Folder Structure

The project folder is organized as follows:

```
tasks/
  ├── Frontend/                 # Frontend (React.js) files
  ├── Backend/                 # Backend (Node.js) files
        ├── .env                    # Environment variable configurations
  ├── README.md               # Project readme file
  └── ...
```

The `Frontend` folder contains all the frontend code, while the `Backend` folder contains the backend code.

## Technologies Used

The Task Manager application utilizes the following technologies:

- **MongoDB:** A NoSQL database used to store and manage task data.
- **Express.js:** A fast and minimalist web framework for building the server-side application.
- **React.js:** A popular JavaScript library for building user interfaces.
- **Node.js:** A JavaScript runtime environment used to run the server-side application.
- **JWT (JSON Web Tokens):** A secure method for authentication and authorization.

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request detailing your changes and their benefits.

## License

This project is licensed under the [MIT License](LICENSE).

