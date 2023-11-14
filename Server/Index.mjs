import express from "express";
import morgan from "morgan";
import Routes from "./routes/Routes.mjs";

const app = express();
const port = 3001
app.use(morgan('combined'));
app.use('/api', Routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app;