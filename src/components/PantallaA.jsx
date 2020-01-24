import React, { Component } from 'react'
import '../style-pantalla.css'

class PantallaA extends Component {
    render() {
        return (
            <div className="container">
                <div className="encabezado">
                    <div className="logo">
                        <img src="https://accmex.com.mx/wp-content/uploads/2017/06/logo-accmex-2.png" alt="accmex"/>
                    </div>
        <h3 id="fecha">{Date()}</h3>
                    <div></div>
                </div>
                <div className="cuerpo">
                    <div className="informacion">
                        <div className="fila1">
                            <div className="mesa-name">
                                <h1>Mesa A</h1>
                            </div>
                            <div className="project-personal">
                                <h3>Proyecto:</h3>
                                <h3>Cliente:</h3>
                                <h3>Lider del proyecto:</h3>
                                <h3>Comentarios:</h3>
                            </div>
                        </div>
                        <div className="fila2">
                            <div className="documents">
                                <h3>Documentos para produccion:</h3>
                                <ul>
                                    <li><i class="fas fa-check"/> Documento 1</li>
                                    <li><i class="fas fa-check"/> Documento 2</li>
                                    <li><i class="fas fa-check"/> Documento 3</li>
                                    <li><i class="fas fa-check"/> Documento 3</li>
                                    <li><i class="fas fa-check"/> Documento 4</li>
                                    <li><i class="fas fa-check"/> Documento 5</li>
                                    <li><i class="fas fa-check"/> Documento 7</li>
                                    <li><i class="fas fa-check"/> Documento 8</li>
                                    <li><i class="fas fa-check"/> Documento 9</li>
                                    <li><i class="fas fa-check"/> Documento 10</li>
                                </ul>
                            </div>
                            <div className="dates">
                                <div className="dia">
                                    <h4>Fecha de inicio:</h4>
                                    <h4>Fecha límite de termino</h4>
                                    <h4>Fecha de termino:</h4>
                                    <h4>Fecha de entrega</h4>
                                </div>
                                <div className="progreso">
                                    <h4>Porcentaje de avance del proyecto.</h4>
                                </div>
                            </div>
                        </div>
                        <div className="fila3">
                            <div className="activities">
                                <h4>Actividad realizando:</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit delectus ex omnis aperiam perspiciatis modi dolor architecto eum at possimus numquam hic nostrum incidunt ea aliquid nihil ipsam, iure cupiditate!
                                </p>
                            </div>
                            <div className="status">
                                <h4>Edtado del proyecto:</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis labore dolor, quisquam ad asperiores ratione. Enim, at. Commodi nostrum, maiores nam laborum modi dolorem ullam perferendis illum vero delectus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="materiales">
                        {/* <div></div>
                        <div></div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default PantallaA