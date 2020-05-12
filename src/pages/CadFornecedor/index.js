import React from 'react';
import Header from '../../components/Header'

// import { Container } from './styles';

function Cadfoncedor() {
  return (
      <>
      <Header></Header>
      
      <div className="product-container">
          
          <div className="content">
              <section>
                  <h1>Cadastro de Foncedor</h1>
              </section>
              <form>
                  <div className="form-group">
                      <label>Nome do fornecedor</label>
                      <input type="txt" placeholder="Nome" required />
                  </div>

                  <div className="form-group">
                      <label>Descrição do fornecedor</label>
                      <input placeholder="Descrição " required />
                  </div>

             

                  <div className="form-group">
                      <label>Produtos que fornece</label>
                      <input type="txt" placeholder="Produtos que fornece" required />
                  </div>


                  <button type="submit" className="button">Cadastrar</button>
              </form>
          </div>
      </div>
      </>  
  );
}

export default Cadfoncedor;