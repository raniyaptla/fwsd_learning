import express from "express";
import Connection from "./connection.js";
let app=express()

app.get( "/", (req, res) => {
    res.send("Working...")}
);

Connection().then(() => {
    app.listen(8000, () => {
        console.log('Listening on port 8000');
    });
});