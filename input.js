const { movement, messages } = require("./constants");

// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;
  return stdin;
};

const handleUserInput = function(keyPress) {
  if (keyPress === '\u0003') {
    console.log("Thanks for playing!");
    process.exit();
  }
  if (movement[keyPress]) {
    connection.write(movement[keyPress]);
  }
  if (messages[keyPress]) {
    connection.write(messages[keyPress]);
  }
};

module.exports = { setupInput };