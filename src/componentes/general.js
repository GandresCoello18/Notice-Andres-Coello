import React from 'react';
import Loader from './loader';
import './css/general.css';

class General extends React.Component{
    state = {
        gif: true,
        error: null,
        data: {
            articles: [],
        },
    }

    componentDidMount(){
            if(!localStorage.getItem("acceso")){
                window.location.href="/";
            }
        this.fetchCharacters();
    }

    fetchCharacters = async () => {
        this.setState({
            gif: true, error: null
        })
        try {
            const respuesta = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c78a8c946dca497287fb3ec72e46fa3e');
            const data = await respuesta.json();
            this.setState({
                gif: false,
                data: data,
            });
        } catch (error) {
            this.setState({
                gif: false,
                error: error,
            });
        }
    }

    render(){
        return (
            <div className="row justify-content-center">
                {this.state.data.articles.map(valor => (
                    <div className="col-12 mt-2 col-md-8" key={valor.id}>
                    <a href={valor.url} target="_blanck">
                        <article className="p-3 articulo">
                            <div className="row">
                                <div className="col-9">
                                    <h5 className="p-1">{valor.title}</h5>
                                    <p className="p-1">{valor.description}</p>
                                </div>
                                <div className="col-3">
                                    <img src={valor.urlToImage} className="img-fluid"/>
                                </div>
                            </div>
                        </article>
                    </a>
                    </div>
                ))}
                {this.state.gif && (
                < Loader />
            )}
            </div>
        )
    }
}

export default General;
