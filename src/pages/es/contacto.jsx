import React from 'react';
import styles from '../../styles/contacto.module.css';
import { Link } from 'react-router-dom';
import Navigator from '../../components/navigator.jsx';
import Footer from '../../components/footer.jsx';
import Mapa from '../../components/mapa.jsx'
import { FaInstagram, FaFacebook, FaPhone, FaEnvelope} from 'react-icons/fa';


function Contacto(){
    return(
        //CONTENEDOR PRINCIPAL
        <div className={styles.container}>
            {/*Navegador*/}
            <div className={styles.navigator}>
                <Navigator />
            </div>
            {/*Imagen Fondo Landing*/}
            <div className= {styles.backgroundContainer}>
                <img src='/fotos/fotoLampara1.jpg' className={styles.backgroundImage} alt="Fondo" />
            </div>
            
            {/*Contenedor secciones*/}
            <div className={styles.content}>

                {/*Mapa*/}
                <div className={styles.mapa}>
                    <Mapa />
                </div>
                {/*Redes*/}
                <div className={styles.redes} >
                    {/*Telefono*/}
                    <a href="tel:+34646736013" className={styles.link}>
                        <span>+34646736013</span>
                        <FaPhone></FaPhone>
                    </a>
                    {/*Facebook*/}

                    <a href="https://facebook.com" target ="_blank" className={styles.link}>
                        <span>Facebook</span>
                        <FaFacebook></FaFacebook>

                    </a>
                    {/*Instagram*/}

                    <a href="https://instagram.com" target="_blank" className={styles.link}>
                        <span>Instagram</span>
                        <FaInstagram></FaInstagram>

                    </a>
                    <a href="mailto:alfresco@alfrescorestaurant.es" target="_blank" className={styles.link}>
                        <span>alfresco@alfrescorestaurant.es</span>
                        <FaEnvelope></FaEnvelope>

                    </a>
                   
                  
                </div>
                
            </div>
            <Footer />
        </div>
    );
}

export default Contacto;