const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const connectionObject = connect();

setupInput(connectionObject);

