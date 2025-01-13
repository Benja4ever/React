import './css/section1.css';
const Section1 = () =>{
    return(
        <section className="section1">
            <article className="section1-article">
                <div className="section1-content">
      
                    <div className="section1-image">
                        <img src='https://www.petdarling.com/wp-content/uploads/2021/01/cachorro-aullando.jpg' alt="Descripción de la imagen" />
                    </div>
      
                    <div className="section1-text">
                        <h3>Título de la sección</h3>
                        <p>Este es el texto descriptivo de la sección. Aquí puedes agregar más detalles sobre el contenido de esta parte de la página.
                        </p>
                    </div>
                </div>
            </article>
        </section>

    )
}
export default Section1;