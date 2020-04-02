import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="The Be Hero"/>

                <form action="">
                    <h1>Faça seu Login</h1>
                    <input type="text" placeholder="Sua ID"/>
                    <button type="submit" className="button"> Entrar </button>

                    <Link to="/register"  className="back-link"> 
                    <FiLogIn size={16} color="#e02041"/>
                    não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={herosImg} alt="heroes" />

        </div>
    );
}