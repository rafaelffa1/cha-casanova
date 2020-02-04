'use strict';

const e = React.createElement;

class Cha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      confirmarSenha: '',
      nomeSobrenome: '',
      continuarLogado: false,
      esqueciSenha: false,
      cadastrarUsuario: false,
      isGoing: true
    }
  }

  renderContainerLogin = () => {
    return (
      <div>
        <div className="col-sm-6 col-lg-3 isotope-item utensilios">
          <div className="portfolio-item">
            <div style={{
              background: 'rgba(0,0,0,0.8)',
              display: 'flex',
              height: '100%',
              position: 'absolute',
              zIndex: 99,
              width: '100%',
              justifyContent: 'center',
              paddingTop: '5em'
            }}>
              <div>
                <span
                  style={{
                    background: 'wheat',
                    padding: '7px',
                    borderRadius: '6px',
                    color: '#e72e6d',
                    fontWeight: 'bold',
                  }}>Produto já selecionado</span>
              </div>
            </div>
            <span className="thumb-info thumb-info-lighten border-radius-0">
              <span className="thumb-info-wrapper border-radius-0">
                <img src="img/abridor_latas.jpg" className="img-fluid border-radius-0" alt="" />
                <span className="thumb-info-title">
                  <span className="thumb-info-inner">Abridor de Latas</span>
                  <span className="thumb-info-type">Utensílios</span>
                </span>
                <span className="thumb-info-action">
                  <span style={{ fontSize: 11, cursor: 'pointer', color: '#f3868f', fontWeight: 'bold' }} className="thumb-info-action-icon bg-dark w-100 opacity-8">
                    SELECIONAR ITEM
                    </span>
                </span>
              </span>
            </span>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item utensilios">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/air_fryer.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Air Fryer</span>
                    <span className="thumb-info-type">Utensílios</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item jogoskit">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-2.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/bowls.jpeg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Jogo de Bowls</span>
                    <span className="thumb-info-type">Jogos & Kits</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item jogoskit">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-3.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/colheres_silicone.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Colheres de silicones</span>
                    <span className="thumb-info-type">Jogos & Kits</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item utensilios">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-4.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/copo_medidor.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Copo Medidor</span>
                    <span className="thumb-info-type">Utensílios</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item utensilios">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-5.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/descascador_legumes.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Descascador de legumes</span>
                    <span className="thumb-info-type">Utensílios</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item limpeza">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-6.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/esfregao_mop.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Esfregão (MOP)</span>
                    <span className="thumb-info-type">Limpeza</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item camabanho">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/ferro_passar.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Ferro de passar</span>
                    <span className="thumb-info-type">Cama & Banho</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item utensilios">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/forno_eletrico.jpeg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Forno Eléctrico</span>
                    <span className="thumb-info-type">Utensílios</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item jogoskit">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/jogo_copos.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Jogo de copos</span>
                    <span className="thumb-info-type">Jogos & Kits</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item jogoskit">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/jogo_lencol.jpeg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Jogo de Lençol</span>
                    <span className="thumb-info-type">Jogos & Kits</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item jogoskit">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/jogo_panelas.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Jogo de Panelas</span>
                    <span className="thumb-info-type">Jogos & Kits</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item jogoskit">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/jogo_pratos.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Jogo de Pratos</span>
                    <span className="thumb-info-type">Jogos & Kits</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item jogoskit">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/jogo_talheres.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Jogo de Talheres</span>
                    <span className="thumb-info-type">Jogos & Kits</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item jogoskit">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/jogo_toalha.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Jogo de Toalhas</span>
                    <span className="thumb-info-type">Jogos & Kits</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item jogoskit">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/jogo_xicaras.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Jogo de Xicaras</span>
                    <span className="thumb-info-type">Jogos & Kits</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item jogoskit">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/kit_ferramentas.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Kit de Ferramentas</span>
                    <span className="thumb-info-type">Jogos & Kits</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item jogoskit">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/kit_peneiras.jpeg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Kit de Peneiras</span>
                    <span className="thumb-info-type">Jogos & Kits</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item jogoskit">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/kit_petisqueira.jpeg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Kit de Petisqueira</span>
                    <span className="thumb-info-type">Jogos & Kits</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item jogoskit">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/kit_potes.jpeg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Kit de Potes</span>
                    <span className="thumb-info-type">Jogos & Kits</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item utensilios">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/liquidificador.jpeg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Liquidificador</span>
                    <span className="thumb-info-type">Utensílios</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item limpeza">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/lixeira_inox.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Lixeira (Inox)</span>
                    <span className="thumb-info-type">Limpeza</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item utensilios">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/microondas.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Lixeira (Inox)</span>
                    <span className="thumb-info-type">Utensílios</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item utensilios">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/mixer.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Mixer</span>
                    <span className="thumb-info-type">Utensílios</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item utensilios">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/pipoqueira.jpeg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Pipoqueira</span>
                    <span className="thumb-info-type">Utensílios</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item camabanho">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/porta_shampoo.jpeg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Porta Shampoo</span>
                    <span className="thumb-info-type">Cama e Banho</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item utensilios">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/porta_temperos.jpeg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Porta Temperos</span>
                    <span className="thumb-info-type">Utensílios</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item jogoskit">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/potes_multiuso.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Potes Multiuso</span>
                    <span className="thumb-info-type">Jogo & Kit</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item utensilios">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/ralador.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Ralador</span>
                    <span className="thumb-info-type">Utensílios</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item utensilios">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/sanduichera.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Sanduicheira</span>
                    <span className="thumb-info-type">Utensílios</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item utensilios">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/supla_mesa.jpg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Supla Mesa</span>
                    <span className="thumb-info-type">Utensílios</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8">
                      <i className="fas fa-plus"></i>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item utensilios">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/tabua_corte.jpeg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Tabua de corte</span>
                    <span className="thumb-info-type">Utensílios</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3 isotope-item utensilios">
          <div className="portfolio-item">
            <a href="ajax/portfolio-ajax-project-7.html" data-ajax-on-modal>
              <span className="thumb-info thumb-info-lighten border-radius-0">
                <span className="thumb-info-wrapper border-radius-0">
                  <img src="img/tabua.jpeg" className="img-fluid border-radius-0" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Tabua de passar Roupa</span>
                    <span className="thumb-info-type">Utensílios</span>
                  </span>
                  <span className="thumb-info-action">
                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fas fa-plus"></i></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

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