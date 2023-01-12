import React from "react";
import axios from "axios";


const DDSportsFavorite = (props) => {

    const [sportsFavorite, setSportsFavorite] = React.useState([]); //array vazio aqui no final para prevenir erro de undefined tentando ser mapeado.

    function findPlaces() {
        axios.get( "http://localhost:8080/api/user_sport_favorite"
        ).then( Response => {
            const places = Response.data;
            setSportsFavorite(places);
            console.log("sportsFavorate");
        }).catch(error => {
            console.log(error.Response)
        });
    }

    React.useEffect(() => { //componentDidMount das funções.
        findPlaces();
    },[]);

    return (
        <select  id={props.id} onChange={props.onChange}>
            <option className="form-control" value="">Esportes Favorito</option>
            {sportsFavorite.map( SportsFavorite => {
                const {id, name} = SportsFavorite; 
                if(props.returnEntity) { 
                    const stringOfObject = JSON.stringify(SportsFavorite);
                    return (<option key={id} className="form-control" value={stringOfObject}>{name}</option>)
                }
                return (<option key={id} className="form-control" value={id}>{name}</option>)
            })}
        </select>
    )
}

export default DDSportsFavorite;