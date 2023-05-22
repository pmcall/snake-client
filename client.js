const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "10.0.2.15",// IP address here,
    port: "50541",// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  conn.on("connect", () => {
    conn.write("Name: PAB");
  });
  conn.setTimeout(5000);
  conn.on('timeout', () => {
    console.log("You took too long to make a move. Try again.");
    conn.end();
    process.exit();
  });

  return conn;
};

module.exports = { connect };