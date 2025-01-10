import Header from './componentes/Header'
import Menu from './componentes/menu'
import Producto from './componentes/producto'
import Articulo1 from './componentes/articulo'
import Articulo2 from './componentes/articulo2'
import { data } from './componentes/articulo3'
import './App.css';
const App = () =>{
  
  return(
    <> 
    <Menu></Menu>
    <Header></Header>
    <Producto></Producto>
    <Articulo1></Articulo1>
    <div className="container">
            <h2>Segundo Artículo</h2>
            <div className="project-grid">
              <Articulo2 titulo="Guantes Latex" 
                imagen='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2oxleSmOPyV4i7QPpqq3vxq-xJjNWMJn9g&s'
                descripcion="Guantes de higiene y protección sanitaria Guantes de higiene y protección sanitaria Guantes de higiene y protección sanitaria Guantes de higiene y protección sanitaria Guantes de higiene y protección sanitaria ">
              </Articulo2>
              <Articulo2 titulo="Guantes Latex" 
                imagen='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2oxleSmOPyV4i7QPpqq3vxq-xJjNWMJn9g&s'
                descripcion="Guantes de higiene y protección sanitaria Guantes de higiene y protección sanitaria Guantes de higiene y protección sanitaria Guantes de higiene y protección sanitaria Guantes de higiene y protección sanitaria ">
              </Articulo2>
              <Articulo2 titulo="Guantes Latex" 
                imagen='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2oxleSmOPyV4i7QPpqq3vxq-xJjNWMJn9g&s'
                descripcion="Guantes de higiene y protección sanitaria Guantes de higiene y protección sanitaria Guantes de higiene y protección sanitaria Guantes de higiene y protección sanitaria Guantes de higiene y protección sanitaria ">
              </Articulo2>
            </div>
      </div>
      <div className="container">
        <h2>Tercer Artículo</h2>
        <div className="project-grid">
          {
            data.map(articulo =>{
              return <Articulo2
              titulo={articulo.titulo}
              imagen={articulo.imagen}
              descripcion={articulo.descripcion}
              >
                
              </Articulo2>
            })
          }
        </div>

      </div>
        
    </>
  )
}

export default App
