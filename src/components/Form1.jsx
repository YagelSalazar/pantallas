import React, { Component } from 'react'
import '../style-form.css'

class Form1 extends Component {
    render() {
        return (
            <div className="container">
                <header className="navBar">
                    <div className="logo">
                        <img src="https://accmex.com.mx/wp-content/uploads/2017/06/logo-accmex-2.png" alt="accmex" />
                    </div>
                    <div className="navegate">
                        <ul>
                            <li><a className="link" href="#">Datos del proyecto</a></li>
                            <li><a className="link" href="#materiales">Materiales</a></li>
                            <li><a className="link" href="#documentos">Documentos para proyecto</a></li>
                        </ul>
                    </div>
                </header>
                <div id="datos-proyecto">
                    <div className="form">
                        <div className="left">
                            <div className="fila">
                                <h4>Proyecto:</h4>
                                <input type="text" id="nombreProyecto" name="nombreProyecto" placeholder="Nombe del proyecto..." />
                            </div>
                            <div className="fila">
                                <h4>Cliente:</h4>
                                <input type="text" id="clienteProyecto" name="clienteProyecto" placeholder="Cliente..." />
                            </div>
                            <div className="fila">
                                <h4>Lider de proyecto:</h4>
                                <input type="text" id="liderProyecto" name="liderProyecto" placeholder="Lider del proyecto..." />
                            </div>
                            <div className="fila">
                                <h4>Linea:</h4>
                                <select id="lineaProyecto" name="lineaProyecto">
                                    <option value="australia">1</option>
                                    <option value="canada">2</option>
                                    <option value="usa">3</option>
                                </select>
                            </div>
                            <div className="fila">
                                <h4>Comentarios del proyecto:</h4>
                                <textarea id="comentarioProyecto" name="comentarioProyecto" placeholder="Escribe tus comentarios aquí..."></textarea>
                            </div>
                        </div>
                        {/* ---------------------------------------------------------------------------right side of the screen */}
                        <div className="right">
                            <div className="fila">
                                <h4>Fecha de inicio:</h4>
                                <input type="date" id="inicioProyecto" name="inicioProyecto" />
                            </div>
                            <div className="fila">
                                <h4>Fecha de termino estimada:</h4>
                                <input type="date" id="lname" name="lastname" />
                            </div>
                            <div className="fila">
                                <h4>Avance:</h4>
                                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            </div>
                            <div className="fila">
                                <h4>Estado del proyecto:</h4>
                                <select id="country" name="country">
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                </select>
                            </div>
                            <div className="fila">
                                <h4>Fecha de entrega:</h4>
                                <input type="date" id="lname" name="lastname" placeholder="Your last name.." />
                            </div>
                            <div className="fila">
                                <h4>Imagen de producto terminado:</h4>
                                <input type="file" id="lname" name="lastname" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------------------------------------------------------------------Botoes para enviar */}
                <div className="buttons">
                    <a href="#submit" className="btnForms">Guardar</a>
                    <a href="#submit" className="btnForms">Cancelar</a>
                    <a href="#submit" className="btnForms">Limpiar tados</a>
                </div>
                {/* --------------------------------------------------------------------------------------Materiales */}
                <div id="materiales">
                    <h1>Materiales</h1>
                    <div className="material-form">
                        <h4>Material:</h4>
                        <input type="text" id="lname" name="lastname" />
                    </div>
                    <div className="material-form">
                        <h4>Fecha de llegada:</h4>
                        <input type="date" id="inicioProyecto" name="inicioProyecto" />
                    </div>
                    <a href="#add" className="btnForms">Agregar material</a>
                    <a href="#add" className="btnForms">Eliminar material</a>
                    <a href="#add" className="btnForms">Actualizar material</a>
                </div>
                {/* --------------------------------------------------------------------------------------Actividades */}
                <div id="materiales">
                    <h1>Actividades</h1>
                    <div className="material-form">
                        <h4>Actividad:</h4>
                        <input type="text" id="lname" name="lastname" />
                    </div>
                    <div className="material-form">
                        <h4>Responsable:</h4>
                        <input type="text" id="lname" name="lastname" />
                    </div>
                    <a href="#add" className="btnForms">Agregar actividad</a>
                    <a href="#add" className="btnForms">Eliminar actividad</a>
                    <a href="#add" className="btnForms">Actualizar actividad</a>
                </div>
            </div>
        );
    }
}

export default Form1