import './css/nav1.css';
const Menu1 = () =>{
    return(
        <article id='menu'>
            <div>
                <div className='nav-grid'>
                    <div className='cincuenta'>
                        <h3>Practicando-Web</h3>
                    </div>
                    <div className='cincuenta'>
                        <ul className= "menu">
                             <li><a href="Hola">Hola</a></li>
                            <li><a href="Como">Como</a></li>
                            <li><a href="Estas">Estás</a></li>
                            <li><a href="Tu">Tú</a></li>
                            <li><a href="Ahora">Ahora</a></li>
                        </ul>
                    </div>
                </div>  
            </div>
        </article>
    )
}
export default Menu1;