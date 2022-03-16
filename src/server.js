const connect = require("./configs/db");
const app = require("./index");
app.listen("2000", async () => {
  await connect();
  console.log("Listening on port 2000");
});
