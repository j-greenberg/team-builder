import React, {useState} from "react";

const Form = props => {
    console.log("props", props);

    const [member, setMember] = useState({
        name: "",
        role: "",
        email: ""
    });

    const handleChanges = e => {
        console.log(member);
        
        setMember({
            ...member, 
            [e.target.name]: e.target.value
        });
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({name: "", role: "", email: ""});
    };

    return(
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name: </label>
                    <input 
                    id="name" 
                    type="text" 
                    name="name" 
                    onChange={handleChanges} 
                    value={member.name}
                    />

                <label htmlFor="role">Role: </label>
                    <input 
                    id="role" 
                    type="text" 
                    name="role" 
                    onChange={handleChanges} 
                    value={member.role}
                    />

                <label htmlFor="email">Email: </label>
                  <input 
                  id="email" 
                  type="email" 
                  name="email" 
                  onChange={handleChanges} 
                  value={member.email}
                  />
                
                <button type="submit">Submit</button>
            </form>
    );
};

export default Form;