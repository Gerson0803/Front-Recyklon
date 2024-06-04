import React from "react";

const Informacion = () => {
  return (
    <div className="mas-informacion">
      <h2>Más información sobre el reciclaje</h2>
      <div className="grid-container">
        
        <div className="contenedor-verde grande">
          <h3>Productos Reciclables</h3>
          
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Papel y Cartón</h4>
              <ul>
                <li><strong>Reciclables:</strong> Periódicos, revistas, cajas de cereales, papel de impresora.</li>
                <li><strong>No reciclables:</strong> Papel encerado, papel con comida, servilletas sucias.</li>
                <li><strong>Por qué:</strong> El papel limpio y seco se puede reciclar varias veces, pero si está contaminado con comida o revestimientos especiales, no se puede procesar adecuadamente.</li>
              </ul>
            </div>
          </div>
         
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Plásticos</h4>
              <ul>
                <li><strong>Reciclables:</strong> Botellas de agua y refrescos (PET), envases de leche y detergentes (HDPE), envases de alimentos (PP).</li>
                <li><strong>No reciclables:</strong> Bolsas de plástico, envolturas de alimentos, utensilios de plástico.</li>
                <li><strong>Por qué:</strong> Algunos plásticos (como el PET y el HDPE) tienen mercados establecidos para su reciclaje, mientras que otros tipos (como las bolsas y envolturas) a menudo no se reciclan debido a la contaminación y la dificultad de procesamiento.</li>
              </ul>
            </div>
          </div>
         
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Vidrio</h4>
              <ul>
                <li><strong>Reciclables:</strong> Botellas y frascos de vidrio.</li>
                <li><strong>No reciclables:</strong> Vidrio roto, espejos, bombillas, cerámica.</li>
                <li><strong>Por qué:</strong> El vidrio de botellas y frascos se puede reciclar eficientemente. Sin embargo, otros tipos de vidrio tienen diferentes composiciones químicas y puntos de fusión, lo que los hace incompatibles con los procesos de reciclaje de vidrio estándar.</li>
              </ul>
            </div>
          </div>
         
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Metales</h4>
              <ul>
                <li><strong>Reciclables:</strong> Latas de aluminio, latas de acero, papel de aluminio limpio.</li>
                <li><strong>No reciclables:</strong> Latas de aerosol con contenido, metales mixtos (por ejemplo, utensilios combinados con plástico).</li>
                <li><strong>Por qué:</strong> Los metales como el aluminio y el acero son altamente reciclables y mantienen su calidad durante el reciclaje. Los metales contaminados o mezclados con otros materiales pueden ser difíciles de procesar.</li>
              </ul>
            </div>
          </div>
         
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Electrónica</h4>
              <ul>
                <li><strong>Reciclables:</strong> Teléfonos móviles, computadoras, televisores.</li>
                <li><strong>No reciclables:</strong> Dispositivos electrónicos rotos o con partes no separables.</li>
                <li><strong>Por qué:</strong> La electrónica contiene metales valiosos y componentes que pueden ser recuperados, pero requieren procesos especiales de reciclaje. Los dispositivos dañados o complejos pueden ser difíciles de reciclar sin procesos adecuados.</li>
              </ul>
            </div>
          </div>
        </div>
       
        <div className="contenedor-verde grande">
          <h3>Productos No Reciclables</h3>
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Desechos Orgánicos</h4>
              <ul>
                <li><strong>No reciclables:</strong> Comida, restos de jardinería.</li>
                <li><strong>Por qué:</strong> Aunque no son reciclables en el sentido tradicional, pueden ser compostados.</li>
              </ul>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Ropa y Textiles</h4>
              <ul>
                <li><strong>No reciclables:</strong> Ropa muy desgastada, textiles con mezcla de materiales.</li>
                <li><strong>Por qué:</strong> Los textiles mezclados y muy desgastados no se reciclan fácilmente debido a la dificultad de separar las fibras y la falta de infraestructura adecuada.</li>
              </ul>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Materiales Peligrosos</h4>
              <ul>
                <li><strong>No reciclables:</strong> Pinturas, productos químicos, baterías, bombillas fluorescentes.</li>
                <li><strong>Por qué:</strong> Estos materiales requieren procesos especiales de manejo y reciclaje debido a sus componentes peligrosos.</li>
              </ul>
            </div>
          </div>
        </div>
      
        <div className="contenedor-verde grande">
          <h3>Factores que Determinan la Reciclabilidad</h3>
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Composición del Material</h4>
              <ul>
                <li>Materiales puros y uniformes son más fáciles de reciclar que los compuestos o mixtos.</li>
              </ul>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Contaminación</h4>
              <ul>
                <li>Los productos deben estar libres de contaminantes como comida, líquidos y productos químicos.</li>
              </ul>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Infraestructura Local</h4>
              <ul>
                <li>La capacidad de reciclaje varía según la infraestructura y las políticas locales.</li>
              </ul>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Demanda del Mercado</h4>
              <ul>
                <li>Algunos materiales tienen mercados establecidos y son económicamente viables de reciclar, mientras que otros no.</li>
              </ul>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Tecnología</h4>
              <ul>
                <li>La disponibilidad de tecnología adecuada para procesar y reciclar ciertos materiales influye en su reciclabilidad.</li>
              </ul>
            </div>
          </div>
        </div>
       
        <div className="contenedor-verde grande">
          <h3>Importancia del Reciclaje</h3>
          
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Beneficios Ambientales</h4>
              <ul>
                <li><strong>Reducción de Residuos en Vertederos:</strong> El reciclaje disminuye la cantidad de residuos que se envían a los vertederos y a las incineradoras, minimizando la contaminación del suelo y del agua, y reduciendo las emisiones de gases de efecto invernadero.</li>
                <li><strong>Conservación de Recursos Naturales:</strong> Al reciclar materiales como papel, plástico, vidrio y metales, se reducen las necesidades de extraer materias primas nuevas, preservando recursos naturales como árboles, minerales y petróleo.</li>
                <li><strong>Ahorro de Energía:</strong> La fabricación de productos a partir de materiales reciclados consume menos energía que la producción desde materias primas vírgenes. Por ejemplo, reciclar aluminio ahorra hasta un 95% de la energía necesaria para producir aluminio nuevo a partir de bauxita.</li>
              </ul>
            </div>
          </div>
          
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Beneficios Económicos</h4>
              <ul>
                <li><strong>Creación de Empleos:</strong> La industria del reciclaje genera empleo en varias etapas del proceso, desde la recolección y clasificación de residuos hasta la transformación y comercialización de productos reciclados.</li>
                <li><strong>Ahorro de Costos para Empresas y Gobiernos:</strong> Reciclar puede reducir los costos de gestión de residuos para las municipalidades y disminuir los gastos de las empresas en materiales y eliminación de residuos.</li>
              </ul>
            </div>
          </div>
          {/* Beneficios Sociales */}
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Beneficios Sociales</h4>
              <ul>
                <li><strong>Educación y Conciencia Ambiental:</strong> El reciclaje fomenta una mayor conciencia y educación ambiental en la sociedad, haciendo que las personas sean más conscientes de sus hábitos de consumo y de la importancia de cuidar el medio ambiente.</li>
                <li><strong>Promoción de Comunidades Sostenibles:</strong> Las iniciativas de reciclaje pueden fortalecer la cohesión comunitaria y promover la sostenibilidad local. Programas de reciclaje comunitario pueden involucrar a los residentes y fomentar un sentido de responsabilidad compartida hacia el medio ambiente.</li>
              </ul>
            </div>
          </div>
          {/* Desafíos y Consideraciones */}
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Desafíos y Consideraciones</h4>
              <ul>
                <li><strong>Contaminación del Reciclaje:</strong> Es fundamental que los materiales reciclables se separen y limpien adecuadamente para evitar la contaminación del reciclaje, lo que puede hacer que materiales reciclables se vuelvan inservibles.</li>
                <li><strong>Infraestructura y Accesibilidad:</strong> La efectividad del reciclaje depende de la infraestructura disponible y del acceso a programas de reciclaje. Es esencial que los gobiernos y las organizaciones inviertan en sistemas eficientes de recolección y procesamiento.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informacion;
