import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import 'bootstrap/dist/css/bootstrap.min.css'


export const NextPatient = () => {
    const { patientList, dispatch } = useContext(AppContext);

    const getNextPatient = () => {
        var nextPatient;
        // Order: Danger -> Warning -> Non-Critical
        const dangerPatientList = patientList.filter(p => p.emergencyStatus === "RED");
        // If there's patient in the danger list, remove the 1st person from the list
        if (dangerPatientList.length !== 0) nextPatient = dangerPatientList[0];
        else {
            const warningPatientList = patientList.filter(p => p.emergencyStatus === "YELLOW");
            // If there's patient in the warning list, remove the 1st person from the list
            if (warningPatientList.length !== 0) nextPatient = warningPatientList[0];
            else {
                const nonCriticalPatientList = patientList.filter(p => p.emergencyStatus === "BLUE");
                // If there's patient in the nonCritical list, remove the 1st person from the list
                if (nonCriticalPatientList.length !== 0) nextPatient = nonCriticalPatientList[0];
                else nextPatient = NaN;
            }
        }
        return nextPatient;
    }
    var nextPatient = getNextPatient();

    const handleClick = (e) => {
        dispatch({
            type: "DELETE_PATIENT",
            payload: nextPatient.id,
        });
        nextPatient = getNextPatient();
    }

  return (
    <div className='row row-cols-auto mt-4'>
        
        <span className='col'><h3 className='mt-4'>Next Patient: {nextPatient.firstName === undefined ? "None" : nextPatient.firstName + " " + nextPatient.lastName}</h3></span>

        <button type="button" 
                className='col-1 ms-2 my-3 btn btn-success'
                onClick={handleClick}>Next</button>
    </div>
  )
}
