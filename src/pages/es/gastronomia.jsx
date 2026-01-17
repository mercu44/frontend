import React from 'react';
import styles from '../../styles/contacto.module.css';
import { Link } from 'react-router-dom';
import Navigator from '../../components/navigator.jsx';
import Footer from '../../components/footer.jsx';
import { useState } from 'react';
import { useEffect } from 'react';

function Gastronomia(){
    
    
    const [platos, setPlatos] = useState(["arroz", "paella", "pan"]);
   
    
    const fotos = ["comida1.jpg","comida2.jpg","comida3.jpeg"];
    
    useEffect(() => {
        document.title = "Gastronomia"
    }, []);
    

    



    return(
        <div className={styles.container}>
            <div className={styles.navigator}>
                <Navigator />
            </div>
            <div className= {styles.backgroundContainer}>
                <img src='/fotos/comida3.jpeg' className={styles.backgroundImage} alt="Fondo" />
            </div>
            
            <ul>
                {fotos.map((foto,index) =>(
                    <li key={index}>
                        <img src={`/fotos/${foto}`} alt={foto} />
                    </li>
                ))
                }
            </ul>
           
            <Footer />
        </div>
    );
}

export default Gastronomia;