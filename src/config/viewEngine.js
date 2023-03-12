import express from "express";

let configViewEngine = (app) => { //arrow function
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs"); //jsp: Java
    app.set("views", "./src/views");
}

module.exports = configViewEngine;