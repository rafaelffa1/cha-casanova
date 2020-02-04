const ProdutosModel = require("../model/ProdutosModel");
const fs = require('fs');

exports.selectAllProdutos = function (callback) {
  ProdutosModel.selectAllProdutos(callback);
};

exports.selecionarProdutos = function (idProduto) {
  ProdutosModel.selecionarProduto(idProduto);
}