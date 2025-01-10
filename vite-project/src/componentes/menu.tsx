import './css/menu.css';
const Menu = () =>{
    
    return(
        <article>
            <div id='menu'>
                <div className='nav-grid'>
                    <div className='cincuenta'>
                        <h3>Practicando-Web</h3>
                    </div>
                    <div>
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
export default Menu;