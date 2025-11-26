const http = require("http");

const port = 8081;

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>home page </h1>");
  }
  if (req.url == "/users") {
      const users = [
          {
              name: "Pedro Szpak",
              email: "pedrohszpaka@gmail.com",
            },
            {
                name: "Isabelle Santos",
                email: "cruzbell@gmail.com",
            },
        ];
        res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify(users))
  }
});

server.listen(port, () => console.log(`Server Online on port ${port}`));
