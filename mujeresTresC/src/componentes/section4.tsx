import './css/section4.css';
const Section4 = () =>{
    
    return(
        <section className="section4">
            <article className="section4-article">
                <div className="section4-grid">
                    <div className="section4-text">
                        <h3>Título de la sección 4</h3>
                        <p>Este es el texto descriptivo de la cuarta sección. Aquí puedes agregar detalles sobre el contenido del video, su propósito o cualquier otra información relevante.
                        </p>
                    </div>
      
                    <div className="section4-video">
                        <video width="100%" controls>
                        <source src="ruta-del-video.mp4" type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                </div>
            </article>
        </section>

    )
}
export default Section4;