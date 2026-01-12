import React from 'react';
import styles from '../../styles/contacto.module.css';
import { Link } from 'react-router-dom';
import Navigator from '../../components/navigator.jsx';
import Footer from '../../components/footer.jsx';



function Contacto(){
    return(

        <div className={styles.container}>
            <div className={styles.navigator}>
                <Navigator />
            </div>
            <div className= {styles.backgroundContainer}>
                <img src='/fotos/foto3.jpg' className={styles.backgroundImage} alt="Fondo" />
            </div>
            <Footer />
        </div>
    );
}

export default Contacto;