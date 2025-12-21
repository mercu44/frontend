import styles from '../styles/footer.module.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Footer(){

    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <a href="/">
                    <img 
                    src='/logos/alfresco-blanco.png'
                    className={styles.logo}
                    alt="Logo"
                    />
                </a>
            </div>
            <div className={styles.subcontainer}>
                <hr></hr>
                <div className = {styles.info}>
                    <p>Carrer d'en Pau Barrabeig, 4, </p>
                    <p>08870 Sitges, </p>
                    <p> Barcelona </p>
                    <p>+34 938 94 06 00 </p>
                    <p>alfresco@alfrescorestaurante.es </p>
                </div>
                <hr></hr>
                <div className = {styles.horario}>
                    <p> HORARIO </p>
                    <p>Abierto de martes a domingo a partir de las 19.15 h</p>
                </div>
                <hr></hr>
                <div className = {styles.redes}>
                    <p> Facebook </p>
                    <p> Instagram </p>
                    <p>Política de privacidad :</p>
                </div>
            </div>
            
        </div>
            
            
    );

}
export default Footer;