import React from "react";

const Members = props => {
    console.log(props);
  return (
    <div>
      {props.team.map(member => (
        <div className="note" key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.role}</p>
          <p>{member.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;
