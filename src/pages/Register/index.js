import React from "react";
import "../Register/style.css";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas.</p>
          <Link className="back-link" to="/">
            <FiLogIn size={16} color="e02041" />
            Não tenho cadastro
          </Link>
        </section>
        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />
          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
