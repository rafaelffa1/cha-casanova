const express = require("express");
const router = express.Router();
const path = require("path");
const ProdutoController = require('./controller/ProdutoController');
const UsuarioController = require('./controller/UsuarioController');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const app = express();

router.use('/', express.static(path.join(__dirname + '/public')), function (req, res, next) {
  next();
});

router.use('/', express.static(path.join(__dirname + '/public/panel/')), function (req, res, next) {
  next();
});

// ===================== Site =============================================

router.get("/", function (req, res) {
  res.sendfile(path.join(__dirname + "/page/index.html"));
});

// ===================== Panel =============================================

router.get("/panel", function (req, res) {
  res.sendfile(path.join(__dirname + "/panel/login.html"));
});

// ===================== Ações ============================================

router.get("/produto/listar", (req, res) => {
  function callback(row) {
    res.json(row);
  }
  ProdutoController.selectAllProdutos(callback);
});

router.post("/produto/selecionar", (req, res) => {
  ProdutoController.selecionarProdutos(req.body.idProduto);
  res.json({ response: true })
});

router.get("/usuario/listar", (req, res) => {
  function callback(row) {
    res.json(row);
  }
  UsuarioController.selectAllUsuarios(callback);
});

module.exports = router;
