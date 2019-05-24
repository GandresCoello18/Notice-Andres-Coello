import React from 'react';
import '../componentes/css/bootstrap.css';
import Nav from '../componentes/nav';
import General from '../componentes/general';

class Home extends React.Component{
    render(){
        return(
            <div className="container fondo-astronauta">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <Nav />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <General />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;