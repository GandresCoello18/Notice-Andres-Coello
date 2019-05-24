import React from 'react';
import './css/tareas.css';

class Tareas extends React.Component{
    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-12 mt-2 col-md-8">
                    <article className="p-3 articulo">
                        <div className="row">
                            <div className="col-9">
                                <h5 className="p-1">Inverstigar las 5 metodologias de software mas utilizados en la industria</h5>
                                <p className="p-1">The coin (BTC). The recent price action has drastically shifted ov…</p>
                            </div>
                            <div className="col-3">
                                <img src="images/file.svg" className="img-fluid"/>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default Tareas;