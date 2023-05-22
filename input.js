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
    if (keyPress === "w") {
      console.log("Move: up");
    }
    if (keyPress === "a") {
      console.log("Move: left");
    }
    if (keyPress === "s") {
      console.log("Move: down");
    }
    if (keyPress === "d") {
      console.log("Move: right");
    }
};

module.exports = { setupInput }