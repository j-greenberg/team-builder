import React, {useState} from "react";

export default function Form(){
    
    const teamMembers = useState("");
    
    function addTeamMember(props){

        return null;
    }

    return(
        <div>
            This is the form.
            <form onSubmit={addTeamMember}>
                <input type="text" name="name"></input>
                <input type="email" name="email"></input>
                <input type="text" name="role"></input>
            </form>
        </div>
    )
}