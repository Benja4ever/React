import './css/section3.css';
const Section3 = () =>{
    
    return(
        <section className="section3">
            <article className="section3-article">
                <div className="section3-grid">
      
                    <div className="section3-item">
                        <div className="icon-circle"></div>
                            <h3>Título 1</h3>
                            <p>Este es el texto descriptivo del primer elemento. Puedes usarlo para 
                            explicar algo específico.
                            </p>
                        </div>
      
                    <div className="section3-item">
                        <div className="icon-circle"></div>
                            <h3>Título 2</h3>
                            <p>Este es el texto descriptivo del segundo elemento. Es perfecto para destacar 
                            características o servicios.
                            </p>
                        </div>
      
                    <div className="section3-item">
                        <div className="icon-circle"></div>
                            <h3>Título 3</h3>
                            <p>Este es el texto descriptivo del tercer elemento. Ideal para mostrar beneficios 
                            o puntos clave.
                            </p>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default Section3;