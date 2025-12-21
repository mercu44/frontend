import React, { useEffect } from 'react';
import styles from '../../styles/reservas.module.css';
import Navigator from '../../components/navigator.jsx';
import Footer from '../../components/footer.jsx';


function Reservas() {
    useEffect(() => {
        // Inicializar el campo de teléfono con intl-tel-input
        const input = document.querySelector("#phone");
        const iti = window.intlTelInput(input, {
            initialCountry: "es",  // España será la opción predeterminada
            geoIpLookup: function(callback) {
                fetch("https://ipinfo.io", { method: "GET" })
                    .then(response => response.json())
                    .then(data => callback(data.country))
                    .catch(() => callback("es"));
            },
            separateDialCode: true,  // Mostrar el prefijo separado
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // Necesario para validación y formatos
        });

        return () => {
            iti.destroy(); // Cleanup when the component is unmounted
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.navigator}>
                <Navigator />
            </div>
            <div className={styles.backgroundContainer}>
                <img src="/fotos/alfrescoPatio5.jpg" className={styles.backgroundImage} />
                <h1>Reservas</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.section1}>
                    <div className={styles.subsection2}>
                        <img src="/fotos/colage2.png" className={styles.image2} />

                    </div>
                    <div className={styles.subsection1}>
                        <div className={styles.formulario}>
                            <form >
                                <label htmlFor="fecha">Fecha</label>
                                <input id="fecha" type="date" />
                                
                                <label htmlFor="hora">Hora</label>
                                <select id="hora">
                                    <option>19:15</option>
                                    <option>19:30</option>
                                    <option>19:45</option>
                                    <option>20:00</option>
                                    <option>20:15</option>
                                    <option>20:30</option>
                                    <option>20:45</option>
                                    <option>21:00</option>
                                    <option>21:15</option>
                                    <option>21:30</option>
                                    <option>21:45</option>
                                    <option>22:00</option>
                                    <option>22:15</option>
                                    <option>22:30</option>
                                </select>

                                <label htmlFor="comensales">Comensales</label>
                                <select id="comensales">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                </select>

                                <label htmlFor="nombre">Nombre</label>
                                <input id="nombre" type="text" />

                                <label htmlFor="correo">Correo Electrónico</label>
                                <input id="correo" type="email" />

                                <label htmlFor="tele">Teléfono</label>
                                <input id="phone" type="tel" placeholder="Ej. 612 345 678" />

                                <label> Mensaje adicional</label>
                                <textarea></textarea>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reservas;
