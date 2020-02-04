const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const dbPath = path.resolve(__dirname, "../db/sample.db");
const util = require('util')

let db = new sqlite3.Database(dbPath);

exports.selectAllProdutos = function (callback) {
  db.serialize(function () {
    db.all("SELECT * FROM produtos", function (err, allRows) {
      if (err != null) {
        console.log(err);
      }
      callback(allRows);
    });
  });
}

exports.selecionarProduto = function (idProduto) {
  db.run(`UPDATE produtos SET selecionado = 1 WHERE ID == ${idProduto}`, function (err) {
    if (err != null) {
      console.log(err);
    }
  });
}