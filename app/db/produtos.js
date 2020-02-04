const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('./sample.db');

let produto = ""
produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Abridor de Latas', 'Utensílios', 'img/abridor_latas.jpg', 0, 'utensilios');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Air Fryer', 'Utensílios', 'img/air_fryer.jpg', 0, 'utensilios');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Jogo de Bowls', 'Jogos & Kits', 'img/bowls.jpeg', 0, 'jogoskit');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Colheres de silicones', 'Jogos & Kits', 'img/colheres_silicone.jpg', 0, 'jogoskit');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Copo Medidor', 'Utensílios', 'img/copo_medidor.jpg', 0, 'utensilios');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Esfregão (MOP)', 'Limpeza', 'img/esfregao_mop.jpg', 0, 'limpeza');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Ferro de passar', 'Cama & Banho', 'img/ferro_passar.jpg', 0, 'camabanho');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Forno Eléctrico', 'Utensílios', 'img/ferro_passar.jpg', 0, 'utensilios');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Jogo de copos', 'Jogos & Kits', 'img/jogo_copos.jpg', 0, 'jogoskit');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Jogo de Lençol', 'Jogos & Kits', 'img/jogo_lencol.jpeg', 0, 'jogoskit');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Jogo de Panelas', 'Jogos & Kits', 'img/jogo_panelas.jpg', 0, 'jogoskit');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Jogo de Pratos', 'Jogos & Kits', 'img/jogo_pratos.jpg', 0, 'jogoskit');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Jogo de Talheres', 'Jogos & Kits', 'img/jogo_talheres.jpg', 0, 'jogoskit');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Jogo de Toalhas', 'Jogos & Kits', 'img/jogo_toalha.jpg', 0, 'jogoskit');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Jogo de Xicaras', 'Jogos & Kits', 'img/jogo_xicaras.jpg', 0, 'jogoskit');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Kit de Ferramentas', 'Jogos & Kits', 'img/kit_ferramentas.jpg', 0, 'jogoskit');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Kit de Peneiras', 'Jogos & Kits', 'img/kit_peneiras.jpeg', 0, 'jogoskit');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Kit de Petisqueira', 'Jogos & Kits', 'img/kit_petisqueira.jpeg', 0, 'jogoskit');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Kit de Potes', 'Jogos & Kits', 'img/kit_potes.jpeg', 0, 'jogoskit');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Liquidificador', 'Utensílios', 'img/liquidificador.jpeg', 0, 'utensilios');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Lixeira Banh. (Inox)', 'Limpeza', 'img/lixeira_inox.jpg', 0, 'limpeza');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Lixeira Coz. (Inox)', 'Limpeza', 'img/lixeira_inox.jpg', 0, 'limpeza');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Mixer', 'Utensílios', 'img/mixer.jpg', 0, 'utensilios');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Pipoqueira', 'Utensílios', 'img/pipoqueira.jpeg', 0, 'utensilios');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Porta Shampoo', 'Cama e Banho', 'img/porta_shampoo.jpeg', 0, 'camabanho');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Porta Temperos', 'Utensílios', 'img/porta_temperos.jpeg', 0, 'utensilios');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Potes Multiuso', 'Jogo & Kit', 'img/potes_multiuso.jpg', 0, 'jogoskit');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Ralador', 'Utensílios', 'img/ralador.jpg', 0, 'utensilios');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Sanduicheira', 'Utensílios', 'img/sanduichera.jpg', 0, 'utensilios');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Supla Mesa', 'Utensílios', 'img/supla_mesa.jpg', 0, 'utensilios');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Tabua de corte', 'Utensílios', 'img/tabua_corte.jpeg', 0, 'utensilios');"
db.run(produto);

produto = "INSERT INTO produtos (nome_produto, categoria, imagem, selecionado,  classe_categoria) VALUES ('Tabua de passar Roupa', 'Utensílios', 'img/tabua.jpeg', 0, 'utensilios');"
db.run(produto);

db.close(); 