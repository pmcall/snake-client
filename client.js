const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",// IP address here,
    port: "50541",// PORT number here,
  }) ;

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {console.log("Successfully connected to game server")})
  conn.setTimeout(5000);
  conn.on('timeout', () => {
    console.log("you ded cuz you idled");
    conn.end();
  }); 
  
  return conn;
};

  module.exports = { connect }