const { Person } = require("./person.js");
// require ('./modules/path.js')
require ('./modules/fs.js')
const person = new Person("Pedro");
console.log(person.SayMyName())