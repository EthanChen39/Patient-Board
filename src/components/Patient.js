import React, { useContext } from 'react'

import { AppContext } from '../context/AppContext';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

export const Patient = (props) => {
    var fullName = props.firstName + " " + props.lastName;
    var patientType;
    
    if (props.emergencyStatus === "RED") patientType = "danger";
    else if (props.emergencyStatus === "YELLOW") patientType = "warning";
    else patientType = "primary";
    
    var buttonClassName = "btn btn-sm btn-" + patientType;
    var listClassName = "list-group-item-action list-group-item d-flex justify-content-between list-group-item-" + patientType;
    

    var { dispatch } = useContext(AppContext);
    const handleClick = (e) => {
        dispatch({
            type: "DELETE_PATIENT",
            payload: e.target.id,
        });
    }

  return (
    <li className={listClassName}>
        {fullName}
        <button type="button" 
            key={props.id} 
            id={props.id} 
            className={buttonClassName}
            onClick={handleClick}>
                Remove
        </button>
        
    </li>
  )
}
