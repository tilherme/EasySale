import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import sale from "../../assets/03.svg";
import logo from "../../assets/logo.png";


export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logo} alt="EasySale" className="logo" />  
        <form>
          <h1>Faça seu login</h1>
          <input type="text" placeholder="Seu usuário" />
          <button className="button" type="submit">
            Entrar
          </button>

          <a href="/register">
            <FiLogIn size={16} color="#EB772A" />
            Não tenho cadastro!
          </a>
        </form>
      </section>
      <img src={sale} alt="EasySale" className="sale" />
    </div>
  );
}
