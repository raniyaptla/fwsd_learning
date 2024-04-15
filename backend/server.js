import express from "express";
import Connection from "./connection.js";
import User from "./Schema/User.js";

import bodyParser from "body-parser";
let app = express();
app.use(bodyParser.json());

app.get("/",async (req, res) => {
  let data=await User.find();
  res.send(data);
});

app.post("/post", async (req, res) => {
  let body = req.body;
  try {
    let value = await User.insertMany(body);
    res.status(201).send({ message: "data created",value });
    // console.log(value)
  } catch (error) {
    console.log(error);
  }
});

Connection().then(() => {
  app.listen(8000, () => {
    console.log("Listening on port 8000");
  });
});
