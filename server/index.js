const app = require("./app");
const db = require("./knexfile");

const port = 3000 || process.env.PORT;

(async () => {
  try {
    console.log("Running migrations...");
    await db.migrate.latest();

    console.log("Starting express");
    app.listen(port, () => {
      console.log(`App listening on port ${port}!!!`);
    });
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
