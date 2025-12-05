const { default: mongoose } = require("mongoose");
const { Person } = require("./person.js");
const dotenv = require("dotenv");

dotenv.config();
require("./modules/express.js");
const { connectToDatabase } = require('./src/database/connect.js');
const person = new Person("Pedro Szpak");

connectToDatabase().catch(err => {
	console.error('Failed to connect to database on startup:', err.message || err);
});



// require("./modules/http.js");
// console.log(person.SayMyName())
// require ('./modules/fs.js')
// // require ('./modules/path.js')