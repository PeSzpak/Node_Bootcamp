const { error } = require("console");
const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }
  console.log("Pasta criada com sucesso");
});

fs.writeFile(
  path.join(__dirname, "/test", "teste.txt"),
  "hello word teste",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Tudo foi criado como deveria ter sido criado é nois");
  }
);

fs.appendFile(
  path.join(__dirname, "/teste", "teste.html"),
  "Meu nome é Pedro Szpak",
  (error) => {
    if (error) {
      console.log("Erro: ", error);
    }
    console.log("Deu certin fio");
  }
);

fs.readFile(
  path.join(__dirname, "/test", "teste.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      console.log("Error: ", error);
    }
    console.log(data);
  }
);
