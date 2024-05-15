import React from "react";
import "./MasInformacion.css";

const MasInformacion = () => {
  return (
    <div className="mas-informacion">
      <h2>Más información sobre el reciclaje</h2>
      <div className="grid-container">
        <div className="contenedor-verde mediano">
          <h3>¿Qué se puede reciclar? (Parte 1)</h3>
          <ul>
            <li>Papel y cartón tales como periódicos, revistas, cajas de cartón, papel de oficina, etc.</li>
            <li>Plástico: botellas de agua, envases de alimentos, bolsas de plástico, etc.</li>
          </ul>
        </div>
        <div className="contenedor-verde grande">
          <h3>¿Qué se puede reciclar? (Parte 2)</h3>
          <ul>
            <li>Vidrio como botellas, frascos, vasos, etc.</li>
            <li>Metal como latas de aluminio, latas de conservas, envases de metal, etc.</li>
          </ul>
        </div>
        <div className="contenedor-verde pequeño">
          <h3>¿Qué se puede reciclar? (Parte 3)</h3>
          <ul>
            <li>Electrónicos como teléfonos celulares, computadoras, televisores, etc.</li>
            <li>Pilas y baterías.</li>
          </ul>
        </div>
        <div className="contenedor-verde grande">
          <h3>Consejos para reciclar en casa (Parte 1)</h3>
          <ul>
            <li>Conoce tus materiales: Aprende qué materiales son reciclables en tu área y cómo deben ser separados. Algunos lugares tienen programas de reciclaje específicos y diferentes normativas.</li>
          </ul>
        </div>
        <div className="contenedor-verde pequeño">
          <h3>Consejos para reciclar en casa (Parte 2)</h3>
          <ul>
            <li>Establece un sistema de reciclaje: Coloca contenedores o cubos de reciclaje en áreas convenientes de tu casa para facilitar la separación de materiales reciclables. Puedes tener uno para papel y cartón, otro para plásticos, otro para vidrio, etc.</li>
          </ul>
        </div>
        <div className="contenedor-verde grande ">
          <h3>Consejos para reciclar en casa (Parte 3)</h3>
          <ul>
            <li>Lava y separa los materiales: Asegúrate de enjuagar los envases antes de reciclarlos para evitar malos olores y mantener limpio el proceso de reciclaje. Separa los materiales según su tipo para facilitar el proceso de reciclaje.</li>
          </ul>
        </div>
        <div className="contenedor-verde grande">
          <h3>Consejos para reciclar en casa (Parte 4)</h3>
          <ul>
            <li>Reducción y reutilización: Antes de reciclar, considera si hay formas de reducir la cantidad de residuos que generas. Reutiliza envases y contenedores siempre que sea posible. Por ejemplo, las botellas de vidrio y plástico pueden convertirse en contenedores de almacenamiento.</li>
          </ul>
        </div>
        <div className="contenedor-verde mediano">
          <h3>Impacto del reciclaje en el medio ambiente</h3>
          <p>El reciclaje ayuda a reducir la emisión de gases de efecto invernadero, la deforestación y la contaminación del aire y del agua.</p>
        </div>
        {/* Agrega más contenedores aquí */}
      </div>
      <p>¡Empieza a reciclar hoy y contribuye a un futuro más limpio y sostenible para todos!</p>
    </div>
  );
};

export default MasInformacion;
