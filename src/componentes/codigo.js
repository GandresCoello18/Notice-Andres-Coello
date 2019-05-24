import React from 'react';
import Json from './json-codigo.json';
import './css/tareas.css';

class Codigo extends React.Component{

    componentDidMount(){
        if(!localStorage.getItem("acceso")){
            window.location.href="https://gandrescoello18.github.io/social-students/";
        }
    }

    render(){
        return(
            <div className="row justify-content-center">
                {Json.codigos.map(valor => (
                    <div className="col-12 mt-2 col-md-8" key={valor.id}>
                    <a href={valor.direccion} target="_blanck">
                    <article className="p-3 articulo">
                        <div className="row">
                            <div className="col-9">
                                <h5 className="p-1">{valor.titulo}</h5>
                                <p className="p-1">{valor.descripcion}</p>
                            </div>
                            <div className="col-3">
                                <img src="images/coding.svg" className="img-fluid"/>
                            </div>
                        </div>
                    </article>
                    </a>
                </div>
                ))}
            </div>
        )
    }
}

export default Codigo;