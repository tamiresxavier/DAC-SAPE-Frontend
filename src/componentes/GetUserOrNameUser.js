import React from "react";
import axios from "axios";

const GetUserNameUser = (props) => {

    const [name, setName] = React.useState([]);

    React.useEffect(() => { //componentDidMount das funções.
        findName();
    });

    async function findName() {
        let namefind= "";
        if(props.label === "user") {
            try {
                const Response = await axios.get(`http://localhost:8080/api/place/${props.id}`
                );
                const  user_id_Db = Response.data;
                console.log("user: ",  user_id_Db);
                namefind =  user_id_Db.name;
            } catch (error) {
                console.log(error.Response);
            }
        } else if(props.label === "user") {
            try {
                const Response = await axios.get(`http://localhost:8080/api/user/${props.id}`
                );
                const user_id_Db = Response.data;
                console.log("user:", user_id_Db);
                namefind =  user_id_Db.name;
            } catch (error) {
                console.log(error.Response);
            }
        } else {
            alert("informe \"label=user/user\" em getName");
        };
        //console.log('dentro do método: ', namefind);
        setName(namefind);
    };

    return(
        <td>{name}</td>
    );
}

export default GetUserNameUser;