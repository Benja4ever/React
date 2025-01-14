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
                        <h3 className='title1'>Asociación</h3>
                        <h3 className='title2'>Mujeres de Tres Cantos</h3>
                        <p>Aquí debe ir una breve descripción sobre la asociación, quienes son y que fomentan.</p>
                        <p><span><a href="">Saber más</a></span></p>
                        <button className="btn-5">
                            <span>Hazte socia</span>
                        </button>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default Section1;