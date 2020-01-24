
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../style-principal.css'

class Home extends Component {
    render() {
        return (
            <div className="App">
                <header id="menu-navegacion">
                    <div id="logo">
                        <img src="https://accmex.com.mx/wp-content/uploads/2017/06/logo-accmex-2.png" alt="accmex" />
                    </div>
                    <nav id="menu">
                        <ul>
                            <li><Link to="/form1" className="button btnVer">Editar mesa A</Link>    </li>
                            <li><a href="" className="button btnVer">Editar mesa B</a></li>
                            <li><a href="" className="button btnVer2">Mostrar pantallas alternadas</a></li>
                        </ul>
                    </nav>
                </header>
                <main id="contenido-principal">
                    <div className="seccion">
                        <h2 id="descripcion">Estos son algunos proyectos</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita dolorum iure maiores tenetur sint culpa ex inventore voluptates, incidunt commodi cumque aut sit rerum fuga, nam provident alias ipsam saepe?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia nam ipsa impedit, asperiores totam dicta illum consequuntur quia a cumque eveniet cum necessitatibus consectetur doloremque ullam odit quaerat. Earum.</p>
                        <div className="editaMesa">
                            <Link to="/pantallaA" className="button btnVer3">Ver pantalla A</Link>
                            <a href="" className="button btnVer3">Ver pantalla B</a>
                        </div>
                    </div>
                </main>
                <div id="lateral">
                    <img src="https://cdn.pixabay.com/photo/2017/02/18/11/00/checklist-2077020_960_720.jpg" alt="proyectos" />
                </div>
                <footer></footer>
            </div>
        );
    }
}

export default Home;