
const Articulo2 = (props:{titulo: string; imagen: string; descripcion: string }) =>{
    const imagen = props.imagen;
    const titulo = props.titulo;
    const descripcion = props.descripcion;

    return(
        
                <div className="project-grid">
                    <div className="project">
                        <img src={imagen} alt="guantes" />
                        <h3>{titulo}</h3>
                        <p>{descripcion}</p>
                        <a href="#">Ver Producto</a>
                    </div>
                </div>
        

    )
}
export default Articulo2;