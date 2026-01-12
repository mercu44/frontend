import styles from '../../styles/main.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Navigator from '../../components/navigator.jsx';
import Footer from '../../components/footer.jsx';

function Landing() {
    return (
        // ==========================
        // Caja contendedora 
        // ==========================
        <div className={styles.container}>
            {/* Navegador de arriba  */}
            <div className={styles.navigator}>
                <Navigator />
            </div>
            {/* Imagen del Landing  */}
            <div className={styles.backgroundContainer}>
                <img src='/fotos/foto3.jpg' className={styles.backgroundImage} alt="Fondo" />
            </div>
            {/* Contenedor de las secciones  */}

            <div className={styles.content}>

                {/* Sección 1 */}
                <div className={styles.section1}>
                    <img className={styles.image1}src='/fotos/xavi1.jpg'></img>
                    <h2 className={styles.title}>Un restaurante con historia y sabor mediterráneo</h2>
                    <p className={styles.content}>Desde 1997, Alfresco se ha consolidado como uno de los restaurantes más emblemáticos de Sitges. En nuestra antigua casa de pescadores, cada rincón de nuestro patio al aire libre refleja la esencia del Mediterráneo, creando un ambiente único para disfrutar de una experiencia gastronómica inigualable.</p>
                </div>

                {/* Sección 2 */}
                <div className={styles.section2}>
                    <div className={styles.subsection1}>
                        {/* Mitad Imagen */}
                        <div className={styles.subsubsection1}>
                            <img className={styles.image2}src='/fotos/comida3.jpeg'></img>
                        </div>
                        {/* Mitad Texto */}
                        <div  className={styles.subsubsection2}>
                            <h2 className={styles.title}>Platos con identidad y frescura</h2>
                            <p className={styles.content}>Nuestra cocina se inspira en la tradición mediterránea, utilizando los mejores productos de temporada y con un enfoque que destaca la simplicidad y la frescura. Cada plato que servimos cuenta una historia y está cuidadosamente elaborado para ofrecer una experiencia gastronómica que te conecte con el mar, la tierra y las raíces de nuestra cultura.</p>
                        </div>
                    
                    </div>
                </div>

                {/* Sección 3 */}
                <div className={styles.section2}>
                    <div className={styles.subsection1}>
                        {/* Mitad Texto */}
                        <div  className={styles.subsubsection2}>
                            <h2 className={styles.title}>Ambiente</h2>
                            <p className={styles.content}>Con un patio fresco y lleno de vida, nuestro restaurante destaca por su belleza y sus pequeños detalles que lo han convertido en una parte esencial de Sitges </p>
                        </div>
                        {/* Mitad Imagen */}
                        <div className={styles.subsubsection1}>
                            <img className={styles.image2}src='/fotos/patioArriba.jpg'></img>
                        </div>
                    
                    </div>
                </div>

                {/* Sección 4 */}
                <div className={styles.section2}>
                    <div className={styles.subsection1}>
                        {/* Mitad Imagen */}
                        <div className={styles.subsubsection1}>
                            <img className={styles.image2}src='/fotos/xavi2.jpg'></img>
                        </div>
                        {/* Mitad Texto */}
                        <div  className={styles.subsubsection2}>
                            <h2 className={styles.title}>Platos con identidad y frescura</h2>
                            <p className={styles.content}>Nuestra cocina se inspira en la tradición mediterránea, utilizando los mejores productos de temporada y con un enfoque que destaca la simplicidad y la frescura. Cada plato que servimos cuenta una historia y está cuidadosamente elaborado para ofrecer una experiencia gastronómica que te conecte con el mar, la tierra y las raíces de nuestra cultura.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* El footer de abajo */}
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Landing;
