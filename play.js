const net = require("net");
const { connect } = require('./client')


console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (keyPress) {
    if (keyPress === '\u0003') {
      console.log("Thanks for playing!")
      process.exit();
    }
};

setupInput();