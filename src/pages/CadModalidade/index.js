import React from 'react';

import Header from '../../components/Header';

import './styles.css';

function CadModalidade() {
    return (
       <>
        <Header />
         <div className="modality-container">
            <div className="content">
                <section>
                    <h1>Cadastro de modalidade</h1>
                </section>
                <div className="form">
                    <form>
                        <div className="form-group">
                            <label for="nomeProduto">Nome do Produto</label>
                            <input placeholder="Produto" required name="nomeProduto" />
                        </div>

                        <div className="form-group">
                            <label for='descricao'>Descrição da modalidade</label>
                            <input type="txt" placeholder="Descrição" required name="descricao" />
                        </div>


                        <button type="submit" className="button">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
       </>
    );
        
}
   
    export default CadModalidade;