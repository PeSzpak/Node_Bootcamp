const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();
app.use(express.json());

app.get("/home", (req, res) => {
  res.contentType("text/html");
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
  res.status(200).json(users);
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8081;

app.listen(port, () => console.log(`Express rodando na porta ${port}`));
