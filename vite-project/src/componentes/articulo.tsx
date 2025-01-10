import './css/articulo1.css';
const Articulo1 = () =>{
    return(
        <div className="container">
            <h2>Primer Artículo</h2>
                <div className="project-grid">
                    <div className="project">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2oxleSmOPyV4i7QPpqq3vxq-xJjNWMJn9g&s' alt="" />
                        <h3>Guantes de Latex</h3>
                        <p>Descripción breve del proyecto 1.</p>
                        <a href="#">Ver Producto</a>
                    </div>
                    <div className="project">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2oxleSmOPyV4i7QPpqq3vxq-xJjNWMJn9g&s' alt="" />
                        <h3>Guantes de Lana</h3>
                        <p>Descripción breve del proyecto 1.</p>
                        <a href="#">Ver Producto</a>
                    </div>
                    <div className="project">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2oxleSmOPyV4i7QPpqq3vxq-xJjNWMJn9g&s' alt="" />
                        <h3>Guantes de Protección </h3>
                        <p>Descripción breve del proyecto 1.</p>
                        <a href="#">Ver Producto</a>
                    </div>
                </div>
        </div>

    )
}
export default Articulo1;