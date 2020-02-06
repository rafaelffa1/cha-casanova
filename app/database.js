const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('./db/sample.db');

// CREATE TABLE produtos (ID  SERIAL PRIMARY KEY, nome_produto varchar(255), categoria varchar(255), imagem varchar(255), selecionado INTEGER, classe_categoria varchar(255))
const tableProducts =
  "CREATE TABLE produtos (ID INTEGER PRIMARY KEY AUTOINCREMENT, nome_produto varchar(255), categoria varchar(255), imagem varchar(255), selecionado INTEGER, classe_categoria varchar(255))"
db.run(tableProducts);

db.close(); 