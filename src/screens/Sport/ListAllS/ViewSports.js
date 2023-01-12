import React from "react";
import "./ViewSports.css";
import 'bootswatch/dist/minty/bootstrap.css';
import { withRouter } from 'react-router-dom';
import SportsTable from "../../../componentes/SportsTable";
import SportApiService from "../../../services/SportApiService";
import { showSuccessMessage, showErrorMessage } from '../../../componentes/Toastr';

class ViewSports extends React.Component {
    state = {
        sports:[],
        sportsFavorite:[]
    }

    constructor() {
        super();
        this.service = new SportApiService();
    }
    
    componentDidMount() {
        this.find();
    }

    find = () => {
        this.service.find('')
        .then( Response => {
            const sports = Response.data;
            this.setState({sports});
            console.log(sports);
        }).catch( error => {
            console.log(error.Response)
        });
    }

    delete = (sportId) => {
        this.service.delete(sportId)
        .then( Response => {
            this.find();
        }).catch( error => {
            showErrorMessage("Ocorreu um erro ao excluir o esporte, tente novamente!");
            console.log(error.Response)
        });
    }

    edit = (sportId) => {
        this.props.history.push(`/updateSport/${sportId}`);
    }

    create = () => {
        this.props.history.push("/createSport");
    }

    
    addSportsFavorite = (sportId,user_id_Db) => {
        this.sportsFavorite.addSportsFavorite(sportId,user_id_Db)
        .then( Response => {  
            showSuccessMessage("Você demonstrou interesse nesse esporte!");
        }).catch( error => {
            showErrorMessage(error.response.data);
        });
    }

    render(){
        return(
            <div>
                <header className="App-header">
                    <fieldset>
                    <h1 className="title">Esportes</h1>
                        <br/>
                        <br/>
                        <br/>
                        <SportsTable sports={this.state.sports} delete={this.delete} edit={this.edit} />
                        <sportsFavoriteTabe sportsFavorite={this.addSportsFavorite}/>
                    </fieldset>
                    <br/>
                    <button onClick={this.create} type="button" className="btn btn-primary">Cadastrar novo esporte</button>
                </header>
            </div>
        )
    }
}

export default withRouter(ViewSports);
