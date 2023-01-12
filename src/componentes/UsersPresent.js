import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const rows = props.users.map( user => {
        return (
            <tr key={user.id}>
                <td>{user.name}</td>
                <button className="btn btn-danger" type="button" title="Exclude"
                        onClick={e => props.delete(user.id)}>
                            Excluir
                    </button>
            </tr>
        )
    } )

    return (

        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope='col'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}