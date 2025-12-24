import express from "express"
import { routerUsers } from "./routes/usersR.js";
import { routerAgents } from "./routes/agentsR.js";
import { routerReports } from "./routes/reportsR.js";


const app = express();
app.use(express.json())
const port = 3000

// create Middleware general
app.use("/", (req, res, next) => {
   console.log(req.method, req.path)
   next()
});


// mount routers 
app.use("/users", routerUsers)
app.use("/agents", routerAgents)
app.use("/reports", routerReports)

// create listen
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
