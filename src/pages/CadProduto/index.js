import React from 'react';

import Header from '../../components/Header';



import './styles.css'

function CadProduto() {
    return (
        <>
        <Header />
        <div className="product-container">
            <div className="content">
                <section>
                    <h1>Cadastro de Produto</h1>
                </section>
                <form>
                    <div className="form-group">
                        <label>Codigo do produto</label>
                        <input placeholder="Codigo" required /> 
                    </div>

                    <div className="form-group">
                        <label>Codigo do produto</label>
                        <input type="txt" placeholder="Descrição" required />  
                    </div>
                    
                    <div className="form-group">
                        <label>Codigo do produto</label>
                        <input type="number" placeholder="unidade" required />
                    </div>

                    <div className="form-group">
                        <label>Codigo do produto</label>
                        <input type="number" placeholder="Preço" required />
                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default CadProduto;