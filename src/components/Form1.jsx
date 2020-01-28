import React, { Component } from 'react'
import '../style-form.css'

class Form1 extends Component {
    render() {
        return (
            <div className="container">
                <div id="datos-proyecto">
                    <header className="navBar">
                        <div className="logo">
                            <img src="https://accmex.com.mx/wp-content/uploads/2017/06/logo-accmex-2.png" alt="accmex" />
                        </div>
                        <div className="navegate">
                            <ul>
                                <li><a className="link" href="#">Datos del proyecto</a></li>
                                <li><a className="link" href="#">Materiales</a></li>
                                <li><a className="link" href="#">Documentos para proyecto</a></li>
                            </ul>
                        </div>
                    </header>
                    <div className="form">
                        <div className="left">
                            <div className="fila">
                                <h4>Proyecto:</h4>
                                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            </div>
                            <div className="fila">
                                <h4>Cliente:</h4>
                                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            </div>
                            <div className="fila">
                                <h4>Lider de proyecto:</h4>
                                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            </div>
                            <div className="fila">
                                <h4>Linea:</h4>
                                <select id="country" name="country">
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                </select>
                            </div>
                            <div className="fila">
                                <h4>Actividad en prceso:</h4>
                                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            </div>
                            <div className="fila">
                                <h4>Comentarios del proyecto:</h4>
                                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                            </div>
                        </div>
                        {/* ---------------------------------------------------------------------------right side of the screen */}
                        <div className="right">
                            <div className="fila">
                                <h4>Fecha de inicio:</h4>
                                <input type="date" id="lname" name="lastname" placeholder="Your last name.." />
                            </div>
                            <div className="fila">
                                <h4>Fecha de termino estimada:</h4>
                                <input type="date" id="lname" name="lastname" placeholder="Your last name.." />
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
                <div id="materiales">
                    <h1>Materiales</h1>
                    <div className="form">
                        <div className="area">
                            <h3>Materiales listos</h3>
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                        </div>
                        <div className="area">
                            <h3>Materiales Faltantes</h3>
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form1