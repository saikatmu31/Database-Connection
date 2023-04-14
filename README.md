# Connection to MongoDB using Node.js and Mongoose

This is a simple example of how to connect to MongoDB using Node.js and Mongoose.

## Prerequisites

- Node.js installed
- MongoDB installed and running

## Installation

To get started, clone the repository and navigate to the directory in your terminal. Then, install the dependencies using the following command:

```npm install```


## Usage

To run the application, use the following command:

```node index.js```
or
```npm start```


This will start the application and connect to the MongoDB database using the `dbConnect()` function.

The `mongoose.connect()` method is used to connect to the MongoDB database. The first argument is the connection string, which specifies the host and port of the database. The second argument is an options object, which includes the `useNewUrlParser` and `useUnifiedTopology` options.

The `dbConnect()` function is called when the application starts, and it attempts to connect to the database. If the connection is successful, it logs a message to the console. If the connection fails, it logs an error message to the console.

The `app.listen()` method is used to start the Express server and listen for incoming requests. The `app.get()` method is used to define a route that returns a message when the application is running.

## Configuration

To connect to a different MongoDB database, update the connection string in the `mongoose.connect()` method.

## Credits

For more information on how to use Mongoose, refer to the [Mongoose documentation](https://mongoosejs.com/docs/).

