import styles from '../../styles/main.module.css';
import stylesCarta from '../../styles/Carta.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Navigator from '../../components/navigator.jsx';
import Footer from '../../components/footer.jsx';


const Carta = () => {
  const secciones = [
    {
      titulo: 'Para compartir',
      items: [
        { nombre: 'JAMÓN D.O. GUIJUELO', precio: '29,95 €', desc: 'Cortado a mano, pan de coca con tomate con tomate y aceite de oliva virgen' },
        { nombre: 'BURRATA D.O. PUGLIA', precio: '23,50 €', desc: 'Peperonata, tomates semisecos, pistachos' },
        { nombre: 'GAMBAS A LA PLANCHA', precio: '25,95 €', desc: 'Marinadas en leche de coco y cúrcuma. Cilantro, chile, lima' },
        { nombre: 'MEZZE MEDITERRÁNEA', precio: '26,40 €', desc: 'Mutabal, Hojaldre relleno de queso, Gajos de calabaza asada, Tabulé, Pancake de zanahoria con yogur, mostaza y granada, Olivas especiadas, Pan naan.' },
      ],
    },
    {
      titulo: 'Entrantes',
      items: [
        { nombre: 'SOPA FRÍA DE TOMATE', precio: '14,50 €', desc: '' },
        { nombre: 'ENSALADA DE SANDÍA', precio: '17,95 €', desc: 'Tomate, menta, ricotta salata, cebolla encurtida. Vinagreta de sumac' },
        { nombre: 'ENSALADA DE POLLO', precio: '18,50 €', desc: 'Pepino fresco, vinagreta de tahini, chiles, sésamo' },
        { nombre: 'ENSALADA DE LENTEJAS DE PUY', precio: '17,95 €', desc: 'Calabaza asada, granada, piñones, rúcula, vinagreta' },
        { nombre: 'ENSALADA DE REMOLACHA Y BONIATO', precio: '17,95 €', desc: 'Yogur, pepino, eneldo' },
        { nombre: 'TACOS DE PESCADO', precio: '21,00 €', desc: 'Pico de gallo, aguacate, jalapeño rojo fresco, lima, cilantro' },
        { nombre: 'CEVICHE DE CORVINA', precio: '22,95 €', desc: 'Chile rocoto, cebolla, chip de banana' },
        { nombre: 'KOFTAS DE ALCACHOFAS', precio: '16,95 €', desc: 'Crema ligera de pimientos ahumados, puré de espinacas frescas, kale.' },
        { nombre: 'CALAMARES A LA PLANCHA', precio: '24,50 €', desc: 'Salteados con gremolata. Espinacas y verdura' },
        { nombre: 'VIEIRAS FRESCAS', precio: '25,95 €', desc: 'A la plancha con lima, mantequilla de jengibre y cebollino, edamame' },
        { nombre: 'PATA DE PULPO RÚSTICA', precio: '25,50 €', desc: 'A la brasa, con salsa de pescado tostado y migas al estilo mediterráneo' },
      ],
    },
    {
      titulo: 'Curris y Pasta',
      items: [
        { nombre: 'CURRY MASSAMAN DE TERNERA', precio: '25,00 €', desc: 'Patatas confitadas, arroz jazmín' },
        { nombre: 'CURRY VEGANO', precio: '24,50 €', desc: 'Garbanzos, boniato y espinacas. Arroz basmati' },
        { nombre: 'PAPPARDELLE', precio: '23,95 €', desc: 'Con ragout de ternera' },
      ],
    },
    {
      titulo: 'Platos principales. Pescados',
      items: [
        { nombre: 'FILETE DE RAPE', precio: '29,50 €', desc: 'Cocinado a baja temperatura. Salsa Beurre Blanc, azafrán, hierbas' },
        { nombre: 'PESCADO DE LONJA', precio: '32,00 €', desc: 'A la plancha con sofrito de alubias de Santa Pau, tomate y calamares' },
        { nombre: 'SASHIMI DE ATÚN YELLOWFIN', precio: '31,00 €', desc: 'Ensalada de aguacate, chile, lima, pepino. Salsa de soja' },
        { nombre: 'SUPREMA DE BACALAO', precio: '29,50 €', desc: 'Con berberechos y perejil' },
      ],
    },
    {
      titulo: 'Platos principales. Carnes',
      items: [
        { nombre: 'SOLOMILLO DE ANGUS', precio: '32,00 €', desc: 'Patatas baby salteadas con chalotas, ajos y hierbas mediterráneas' },
        { nombre: 'COSTILLA DE CERDO GLASEADA', precio: '27,95 €', desc: 'Ensalada de col lombarda, manzana, hinojo' },
        { nombre: 'ENTRECOT DE TERNERA BLANCA “TAGLIATA”', precio: '29,95 €', desc: 'Lenteja de puy, mostaza, estragón' },
        { nombre: 'CARRÉ DE CORDERO AGNEI IBÉRICO DE ARAGÓN', precio: '32,50 €', desc: 'Gratín Dauphinois, zanahorias, chirivía' },
      ],
    },
    {
      titulo: 'Guarnición extra',
      items: [
        { nombre: 'PAN DE COCA CON TOMATE', precio: '6,30 €', desc: '' },
        { nombre: 'ENSALADA DE HOJAS VERDES', precio: '8,95 €', desc: 'Con vinagreta.' },
        { nombre: 'PATATAS HORNEADAS', precio: '8,50 €', desc: '' },
        { nombre: 'PLATO DE VERDURAS SALTEADAS', precio: '9,30 €', desc: '' },
        { nombre: 'SERVICIO DE PAN', precio: '2,25 €', desc: 'Servido con Alzina' },
        { nombre: 'PAN SIN GLUTEN', precio: '3,10 €', desc: 'Servido con Alzina' },
        { nombre: 'ALZINA, ACEITE DE OLIVA EXTRA VIRGEN ARBEQUINA', precio: '11,50 €', desc: 'De Canyelles, cosecha octubre de 2024. Botella de 500 m.l.' },
      ],
    },
    {
      titulo: 'Postres',
      items: [
        { nombre: 'CLÁSICO PASTEL DE CHOCOLATE VALRHONA', precio: '9,00 €', desc: 'Con mousse de mascarpone y frutos rojos' },
        { nombre: 'TARTA DE RICOTTA Y LIMÓN', precio: '8,50 €', desc: '' },
        { nombre: 'RUIBARBO CONFITADO', precio: '9,00 €', desc: 'Crema de maracuyá' },
        { nombre: 'CRUMBLE CON PRALINÉ DE AVELLANA', precio: '9,50 €', desc: 'Helado de caramelo salado' },
        { nombre: 'TIRAMISÚ', precio: '9,50 €', desc: 'Receta de Mario Dadda (Bérgamo)' },
        { nombre: 'HELADOS ARTESANALES', precio: '8,50 €', desc: 'Vainilla, chocolate, almendra tostada (dos bolas)' },
        { nombre: 'SORBETES ARTESANALES', precio: '8,50 €', desc: 'Apio-lima o limón (dos bolas)' },
        { nombre: 'SGROPPINO', precio: '9,00 €', desc: 'Sorbete de limón con cava y vodka Absolut Citron' },
        { nombre: 'AFFOGATO', precio: '10,70 €/9,50 €', desc: 'Helado de Vainilla, Café, Amaretto o Baileys | Helado de Vainilla o After eight, Café (sin alcohol)' },
        { nombre: 'CATANIAS Y CARQUIÑOLIS', precio: '9,00 €', desc: 'Dulces típicos de Cataluña' },
        { nombre: 'LA MINI RETORTA DE FINCA PASCUALETE', precio: '12,50 €', desc: 'Queso de leche cruda de oveja' },
      ],
    },
    {
      titulo: 'Cócteles con café',
      items: [
        { nombre: 'ESPRESSO MARTINI', precio: '12,00 €', desc: 'Vodka o Tequila, Licor de café, Café Nespresso' },
        { nombre: 'CAFÉ IRLANDÉS', precio: '12,00 €', desc: 'Whisky, Azúcar, Café Nespresso y Crema' },
        { nombre: 'CARAJILLO', precio: '12,00 €', desc: 'Tequila, Licor 43, Café Nespresso' },
      ],
    },
    {
      titulo: 'Vinos dulces',
      items: [
        { nombre: 'MOSCATEL CASTA DIVA', precio: '7,50 €', desc: '' },
        { nombre: 'DON PX PEDRO XIMÉNEZ', precio: '7,50 €', desc: '' },
        { nombre: 'PAR. VINO DE NARANJA', precio: '7,50 €', desc: '' },
        { nombre: 'OLIVARES. DULCE MONASTRELL', precio: '7,50 €', desc: '' },
        { nombre: 'BANYULS ‘RIMAGE MISE TARDIVE’. DOMAINE LA TOUR VIEILLE', precio: '7,50 €', desc: '' },
      ],
    },
    {
      titulo: 'Infusiones y Tés',
      items: [
        { nombre: 'TÉS', precio: '4,00 €', desc: 'Negro, Rojo, Blanco, Verde' },
        { nombre: 'ROIBOS', precio: '4,00 €', desc: 'Digestivo' },
        { nombre: 'INFUSIONES', precio: '4,00 €', desc: 'Limonelo, Manzanilla, Menta fresca, Poleo-Menta' },
        { nombre: 'MATCHA LATTE', precio: '5,50 €', desc: '' },
        { nombre: 'LECHE DORADA', precio: '6,00 €', desc: 'Cúrcuma, Jengibre, Aceite de Coco, Pimienta negra, Canela' },
        { nombre: 'EXTRA LECHE ESPECIAL', precio: '0,50 €', desc: 'Avena, almendra, sin lactosa' },
      ],
    },
  ];

  return (
    <div>
      <div className={stylesCarta.wrap} > 
      <div className={styles.navigator}>
        <Navigator />
      </div>
      <div className={stylesCarta.carta}>
        
        <h1 className={stylesCarta.titulo}>La Carta</h1>
        {secciones.map((seccion, i) => (
          <div key={i} className={stylesCarta.seccion}>
            <h2 className={stylesCarta.subtitulo}>{seccion.titulo}</h2>
            {seccion.items.map((item, j) => (
              <div key={j} className={stylesCarta.item}>
                <div className ={stylesCarta.header}>
                  <div className={stylesCarta.nombre}>{item.nombre}</div>
                  
                  <div className={stylesCarta.precio}>{item.precio}</div>
                </div>
                {item.desc && <div className={stylesCarta.desc}><p>{item.desc}</p></div>}
                
              </div>
            ))}
          </div>
        ))}
      </div>
      </div>
      <div>
                <Footer/>
      </div>
    </div>
    
  );
};

export default Carta;