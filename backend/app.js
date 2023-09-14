const connectToDb = require("./db/mongoose");
const setupServer = require("./server");

(async () => {
  await connectToDb();
  await setupServer();
})();
