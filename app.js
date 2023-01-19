const express = require("express");
const app = express();
const hbs = require("hbs");
require("dotenv").config();
const port = process.env.PORT;
//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Servir contenido estatico
app.use(express.static("public"));
////////////
app.get("/", (req, res) => {
  // res.sendFile(__dirname+'/templated-roadtrip/generic.html')
  res.render("home", {
    nombre: "Luis",
    titulo: "Curso node",
  });
});
////////
app.get("/generic", (req, res) => {
  // res.sendFile(__dirname + "/templated-roadtrip/generic.html");
  res.render("generic", {
    nombre: "Luis",
    titulo: "Curso node",
  });
});
////////
app.get("/elements", (req, res) => {
  // res.send('Hola mundo en su respectiva ruta')
  // res.sendFile(__dirname + "/templated-roadtrip/elements.html");
  res.render("elements", {
    nombre: "Luis",
    titulo: "Curso node",
  });
});
////////
app.get("*", (req, res) => {
  res.send("404| Page not found");
  // res.sendFile(__dirname+'/public/404.html') llamar un archivo
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
