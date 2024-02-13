const app = require("./app");
const mongoose = require("mongoose");
const { DB_HOST, PORT } = process.env;
// name: Ewm
//zwynMBY5KwYQp80R
mongoose.set("strictQuery", true);

mongoose
	.connect(DB_HOST)
	.then(() => {
		app.listen("5000", () => {
			console.log("server listening on port 5000");
		});
	})
	.catch((err) => {
		console.log(err.message);
		process.exit(1);
	});
