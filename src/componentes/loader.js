import React from 'react';
import Gif from './img/loader.gif';

function loader(){
    return(
        <center>
            <div className="row">
                <div className="col-12">
                    <img src="https://loading.io/spinners/typing/lg.-text-entering-comment-loader.gif" className="img-fluid"/>
                </div>
            </div>
        </center>
    )
}

export default loader;
