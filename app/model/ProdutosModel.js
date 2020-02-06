// Para instalação do postgress
// npm install pg

const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const dbPath = path.resolve(__dirname, "../db/sample.db");
const util = require('util')
const { Pool, Client } = require('pg');
// let db = new sqlite3.Database(dbPath);

const client = new Client({
  connectionString: process.env.DATABASE_URL || "postgres://jwgyejxibksrzf:d3c9968e7f630bf31187143dbbc1e97b2ba176b706efa2b30ea1727fe22bdb43@ec2-3-234-169-147.compute-1.amazonaws.com:5432/d3sqd5cjbt7vtg",
  ssl: true,
});

client.connect();

exports.selectAllProdutos = function (callback) {
  client.query('SELECT * FROM produtos', (err, res) => {
    callback(res.rows);
  });
}

exports.selecionarProduto = function (idProduto) {
  client.query(`UPDATE produtos SET selecionado = 1 WHERE ID = ${idProduto}`, (err, res) => {
    if (err != null) {
      console.log(err);
    }
  });
}