import React from 'react';
import { Link } from 'react-router-dom';
import './css/nav.css';

class Nav extends React.Component{
    menu = () => {
        var refe = document.querySelector('.cuadro-menu');
        if(refe.style.display === 'block'){
            refe.style.display = 'none';
        }else{
            refe.style.display = 'block';
        }
    }
    render(){
        var estilos = {
            link: {
                color: "white",
            }
        }
        return(
            <nav className="row navegacion">
                <div className="col-6">
                <h5 className="text-md-center mt-3">Social Students <img src="images/smartphone.svg" width="35" height="35" /></h5>
                </div>
                <div className="col-6" onClick={this.menu}>
                <p className="text-right mt-3"><img src="images/menu.svg" width="30" height="30" /></p>
                    <div className="row justify-content-end">
                        <div className="col col-md-6 col-lg-4 cuadro-menu">
                            <ul className="nav flex-column"> 
                                <Link to="general"><li className="nav-item p-1">General</li></Link>
                                <Link to="tareas"><li className="nav-item p-1">Tareas y Trabajo</li></Link>
                                <Link to="codigo"><li className="nav-item p-1">Codigos</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;