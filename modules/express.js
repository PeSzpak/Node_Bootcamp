const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("applicatio/html");
  res.status(200).send("<h1>Salve a todos que estão vendo</h1>");
});
app.get("/users", (req, res) => {
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
        res.
    res.status(200).json(users)
    
})

const port = 8081;

app.listen(port, () => console.log(`Express rodando na porta ${port}`));
