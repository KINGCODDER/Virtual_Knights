import React from "react";
import "../st.css";

function TeamCard(props) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-image">
          <img src={props.image} alt="" style={props.style} />
        </div>
        <div className="card-details" style={props.details_style}>
          <p>{props.name}</p>
          <p>{props.designation}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
