const http = require("http");
http
  .createServer((req, res) => {
    // console.log(req);
    // res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    // res.writeHead(200, { "Content-Type": "application/csv" });
    // res.write("id, nombre\n");
    // res.write("1, Fernando\n");
    // res.write("2, Juan\n");
    // res.write("3, Luis\n");
    res.write('Hola mundo')
    res.end();
  })
  .listen(8080);
console.log("escuchando el puesto", 8080);
