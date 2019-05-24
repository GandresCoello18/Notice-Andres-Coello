import React from 'react';
import Modal from './modal';
import Json from './correos.json';
import './css/login.css';

class CuadroRegistro extends React.Component{
    state = {
        imagen1: 'images/smartphone.svg',
        imagen2: 'images/notification.svg',
        imagen3: 'images/user.svg',
        text_modal: '',
        id: Json.correos[0].id
    }

    componentDidMount(){
        if(this.verificar(localStorage.getItem("acceso")) === true ){
            setTimeout( () => {
                alert('Bienvenido, presiona aceptar');
                var pagina="general";
                window.location.href=pagina;
            },2000);
        }
        //console.log(Json.correos);
    }

    verificar = (memoria) => {
        for(var i=0; i<Json.correos.length; i++){
            if(memoria == Json.correos[i].direccion){
               return true; 
            }
        }
    }

     registro = (e) => {
         e.preventDefault();
        var correo = document.getElementById('correo');
        if(correo.value === '' || correo.value.indexOf('@') === -1 ){
            this.setState({text_modal: 'Campos vacios o No escribio un correo electronico'});
        }else{
            this.setState({text_modal: 'Gracias por preferir Social Students...'});
            localStorage.setItem("acceso", correo.value);
            setTimeout(() =>{
                var pagina="general";
                window.location.href=pagina;
            },2000)
        }   
    }

    render(){
        return(
            <div className="cuadro-login" id="root2">
            <Modal isOpen={true}>{this.state.text_modal}</Modal>
                <div className="row align-itens-center">
                    <div className="col-12">
                        <div className="logo">
                            <img src="images/smartphone.svg" className="icon-mobile" width="38" height="38" />
                        </div> 
                        <h5 className="text-center subtitulo mt-4">Notice - Andres Coello</h5>
                        <div className="row justify-content-around mt-4">
                            <div className="col-6">
                                <div className="ovalo">
                                <img src="images/notification.svg" className="icon-notification" width="20" height="20" />
                                <p className="text-center">13 Actividades</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="ovalo">
                                <img src="images/user.svg" className="icon-notification" width="20" height="20" />
                                <p className="text-center">{this.state.id} Miembros</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <div className="col-10">
                                <form>
                                    <input type="email" id="correo" required="" className="form-control  text-center" placeholder="@ - Correo Electronico"/>
                                    <button type="submit" data-toggle="modal" data-target="#cuadro" className="btn color-btn mt-2 form-control" onClick={this.registro}>Registrarme</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CuadroRegistro;
