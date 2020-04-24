import React from 'react';
import './styles.css'
import Card from '../../components/Card';
import Grid from '../../components/Grid';
import Header from '../../components/Header';


export default function Sales() {
  return (
    <>
    <Header />
    <div className="sale-container">
      <div className="content">
        <section className="grid">
          <Grid />
        </section>

        <div className="details">

          <div className="inputs">
            <Card title="Informações da Compra">
                <div className="input-group">
                  <input type="text" placeholder="Cód.Vendedor" style={{ width: 120 }} />
                  <input type="text" placeholder="Nome do vendedor ..." readOnly />
                  <input type="text" placeholder="% Desc." style={{ width: 80 }} />
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Cód.Produto" style={{ width: 120, height: 30 }} />
                  <input type="text" placeholder="Descrição do Produto" readOnly style={{ height: 30 }} />
                  <input type="text" placeholder="Unidade" style={{ width: 80, height: 30 }} />
                  <button className="add">Adicionar</button>
                </div>
            </Card>
          </div>

          <div className="info-sale">
            <Card title="Total">
              <h1>R$ 22</h1>
            </Card>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
