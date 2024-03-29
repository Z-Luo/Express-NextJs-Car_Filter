import express from "express";
import { router } from "./routes/index.js";
import connectToDB from "./utils/db/dbService.js";

const app = express();
const PORT = process.env.PORT || 8080;

connectToDB();

app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
