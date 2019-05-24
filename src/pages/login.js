import React from 'react';
import '../componentes/css/bootstrap.css';
import CuadroRegistro from '../componentes/cuadro_registro';

class login extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row justify-content-center mt-2">
                    <div className="col-12 col-md-8 col-lg-6">
                        <CuadroRegistro />
                    </div>
                </div>
            </div>
        )
    }
}

export default login;