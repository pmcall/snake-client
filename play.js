const { connect } = require("./client");
const { setupInput } = require("./input");
const connectionObject = connect();

setupInput(connectionObject);

console.log("Connecting ...");