import styles from '../styles/navigator.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navigator() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para manejar la visibilidad del menú
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.container}>
            {/* Menú hamburguesa */}
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>

            </div>

            {/* Fondo difuso cuando el menú está abierto */}
            {isMenuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}

            {/* Menú desplegable */}
            <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
                <ul>
                    <li><a href="">Gastronomía</a></li>
                    <li><a href="/carta">Menú</a></li>
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </div>

            {/* Logo */}
            <a href="/">
                <img 
                src='/logos/alfresco-blanco.png'
                className={styles.logo}
                alt="Logo"
                />
            </a>
            
            {/* Botón Reserva */}
            {<button 
            className={styles.button}
            onClick={()=> navigate("/reservas")}
            >RESERVA</button>}

            {/* Selector de idiomas */}
            <div className={styles.languageSelector}>
                <select>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                    <option value="cat">CAT</option>
                    <option value="fr">FR</option>
                </select>
            </div>
        </div>
    );
}

export default Navigator;
