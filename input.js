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
  if (keyPress === "1") {
    connection.write("Say: sssssSSSSSsss!");
  }
  if (keyPress === "2") {
    connection.write("Say: snek");
  }
  if (keyPress === "3") {
    connection.write("Say: snake POWER");
  }
  if (keyPress === "4") {
    connection.write("Say: nom nom nom");
  }
  if (keyPress === "5") {
    connection.write("Say: sssuper sssnake");
  }
};

module.exports = { setupInput };