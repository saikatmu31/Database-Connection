const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.listen(4000, () => {
	console.log(`App is up and running at PORT 4000`);
});

app.get("/", (req, res) => {
	res.send("App is Running");
});

function dbConnect() {
	mongoose
		.connect("mongodb://127.0.0.1:27017/testdatabase", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`)
			console.log(err.message);
		});
}
dbConnect()
