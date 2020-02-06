'use strict';

const e = React.createElement;

class Cha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: []
    }
    this.recuperarProdutos();
  }

  recuperarProdutos = () => {
    $.ajax({
      type: "GET",
      url: `http://${window.location.host}/produto/listar`,
      success: (resp) => {
        this.setState({ produtos: resp });
      }
    });
  }

  clickSelecionarProduto = (idProduto) => {
    $.ajax({
      type: "POST",
      url: `http://${window.location.host}/produto/selecionar`,
      data: { idProduto },
      success: (resp) => {
        if (resp.response === true) {
          this.recuperarProdutos();
        }
      }
    });
  }

  renderContainerLogin = () => {
    const { produtos } = this.state;
    return (
      <div className="row portfolio-list sort-destination popup-gallery-ajax" data-sort-id="portfolio">
        {
          produtos.map((produto) => {
            let classProduto = `col-sm-6 col-lg-3 ${produto.classe_categoria}`;
            return (
              <div key={produto.ID} className={classProduto}>
                <div className="portfolio-item">
                  {
                    produto.selecionado === 1 &&
                    <div className="bxProdutoSelecionado">
                      <div>
                        <span className="labelProdutoSelecionado">Produto já selecionado</span>
                      </div>
                    </div>
                  }
                  <span className="thumb-info thumb-info-lighten border-radius-0">
                    <span className="thumb-info-wrapper border-radius-0">
                      <img src={produto.imagem} className="img-fluid border-radius-0" alt="" />
                      <span className="thumb-info-title">
                        <span className="thumb-info-inner">{produto.nome_produto}</span>
                        <span className="thumb-info-type">{produto.categoria}</span>
                      </span>
                      <span className="thumb-info-action">
                        <span style={{ fontSize: 14 }} onClick={() => this.clickSelecionarProduto(produto.id)} className="thumb-info-action-icon bg-dark w-100 opacity-8 bxSelecionarProduto">
                          SELECIONAR ITEM
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            )
          })
        }

      </div>
    );
  }

  render() {
    return (
      <div>{this.renderContainerLogin()}</div>
    );
  }
}

const domContainer = document.querySelector('#cha_itens');
ReactDOM.render(e(Cha), domContainer);