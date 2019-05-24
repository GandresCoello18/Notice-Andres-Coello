import React from 'react';

class Codigo extends React.Component{
    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-12 mt-2 col-md-8">
                    <article className="p-3 articulo">
                        <div className="row">
                            <div className="col-9">
                                <h5 className="p-1">Simulacion de carrito de compras</h5>
                                <p className="p-1">The crypto markets have incurred overwhelmingly bullish price action over the past several weeks that appears to have confirmed many analyst’s belief that $3,200 truly is a long-term bottom for Bitcoin (BTC). The recent price action has drastically shifted ov…</p>
                            </div>
                            <div className="col-3">
                                <img src="images/coding.svg" className="img-fluid"/>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default Codigo;