import './css/section4.css';
const Section4 = () =>{
    
    return(
        <section className="section4">
            <article className="section4-article">
                <div className="section4-grid">
                    <div className="section4-text">
                        <h3>Noticias</h3>
                        <p>Aquí una breve dscripción sobre las noticias o a¡ctividades que se pueden mostrar mediante un video interactivo.
                        </p>
                        <p><span><a href="">Saber más</a></span></p>
                        <button className="btn-5">
                            <span>Hazte socia</span>
                        </button>
                    </div>
      
                    <div className="section4-video">
                        <video width="100%" controls>
                        <source src='https://www.youtube.com/watch?v=9GghHbQekWk' type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                </div>
            </article>
        </section>

    )
}
export default Section4;