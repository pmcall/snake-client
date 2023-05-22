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
  if (keyPress === "w") {
    connection.write("Move: up");
  }
  if (keyPress === "a") {
    connection.write("Move: left");
  }
  if (keyPress === "s") {
    connection.write("Move: down");
  }
  if (keyPress === "d") {
    connection.write("Move: right");
  }
};

module.exports = { setupInput };