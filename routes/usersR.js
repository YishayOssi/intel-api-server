import express from "express"
export const routerUsers = express.Router();


routerUsers.get("/", (req, res) => {
  res.send("Users home");
});


