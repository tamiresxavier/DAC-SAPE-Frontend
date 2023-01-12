import React from "react";
import GetName from "./GetPlaceOrSportName";
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const rows = props.schedulings.map( scheduling => {

        return (
            <tr key={scheduling.id}>
                <td>{scheduling.scheduledDate}</td>
                <td>{scheduling.scheduledStartTime}</td>
                <td>{scheduling.scheduledFinishTime}</td>
                <GetName id={scheduling.placeId} label="place"/>
                <GetName id={scheduling.sportId} label="sport"/>
                <td>{scheduling.status}</td>
                <td>{scheduling.addParticipant}</td>
                <td>{scheduling.addParticipant}</td>
                <td>
                    <button type="button" title="Confirmar Presença" className="btn btn-success"
                            onClick={e => props.addIsPresent(scheduling.id)}>
                                Sim
                    </button>
                 
                </td>
                <td> 
                    <button type="button" title="Confirmar Interesse" className="btn btn-success"
                        onClick={e => props.addParticipant(scheduling.id)}>
                            Sim
                    </button>
                    <button type="button" title="Desmarcar Interesse" className="btn btn-danger"
                        onClick={e => props.removeParticipant(scheduling.id)}>
                            Não
                    </button>
             
                </td>    
                <td>
                    <button type="button" title="Exclude" className="btn btn-danger"
                        onClick={e => props.delete(scheduling.id)}>
                            Excluir
                    </button>
                </td>
            </tr>
        )
    });

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Data</th>
                    <th scope="col">Início</th>
                    <th scope="col">Fim</th>
                    <th scope="col">Local</th>
                    <th scope="col">Esporte</th>
                    <th scope="col">Status</th>
                    <th/>
                    <th/>
                    <th scope="col">Presença Confirmada?</th>
                    <th scope="col">Demonstrar Interesse?</th>
                    <th scope="col">Ações</th>

                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}