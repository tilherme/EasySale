import React from 'react';
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import './styles.css';
import logo from "../../assets/logo.png";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="EasySale" className="logo" />

          <h1>Cadastro</h1>
          <p>
            Faça seu Cadastro, entre na plataforma e desfrute deste simples e poderoso ERP
          </p>

          <Link to="/" className="link">
            <FiArrowLeft size={16} color="#EB772A" />
            Voltar para o login!
          </Link>
        </section>
        <form>
          <input placeholder="Usuário"  required/>
          <input type="email" placeholder="E-mail"  required/>
          <input type="password" placeholder="Senha"  required/>
          <input type="password" placeholder="Confirmação de senha"  required/>

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
