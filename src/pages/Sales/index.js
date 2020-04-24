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
            <Card title="Informações da Compra" styles="" />
          </div>

          <div className="info-sale">
            <Card title="Total">
              <h1>R$ 10</h1>
            </Card>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
