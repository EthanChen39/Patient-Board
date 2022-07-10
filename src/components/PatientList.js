import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { Patient } from './Patient';
import '../App.css'

export const PatientList = () => {
        const { patientList } = useContext(AppContext);
        
        // Danger patient list
        const [dangerPatientList, setDangerPatientList] = useState(patientList.filter(patient => patient.emergencyStatus === "RED"));
        // Warning patient list
        const [warningPatientList, setWarningPatientList] = useState(patientList.filter(patient => patient.emergencyStatus === "YELLOW"));
        // Okay patient list
        const [okayPatientList, setOkayPatientList] = useState(patientList.filter(patient => patient.emergencyStatus === "BLUE"));
        
        const handleChange = event => {
            const userInput = event.target.value.toLowerCase();
            const searchResult = patientList.filter(p => p.firstName.toLowerCase().includes(userInput) || p.lastName.toLowerCase().includes(userInput));
            setDangerPatientList(searchResult.filter(patient => patient.emergencyStatus === "RED"));
            setWarningPatientList(searchResult.filter(patient => patient.emergencyStatus === "YELLOW"));
            setOkayPatientList(searchResult.filter(patient => patient.emergencyStatus === "BLUE"));
        };

        useEffect(() => {
            setDangerPatientList(patientList.filter(patient => patient.emergencyStatus === "RED"));
            setWarningPatientList(patientList.filter(patient => patient.emergencyStatus === "YELLOW"));
            setOkayPatientList(patientList.filter(patient => patient.emergencyStatus === "BLUE"));
        }, [patientList]);

  return (
    <div className='row mt-4 align-items-start'>
        <div className="input-group flex-nowrap mb-4">
            <span className="input-group-text" id="addon-wrapping">Search</span>
            <input type="text" 
                className="form-control" 
                placeholder="Patient's Name" 
                aria-describedby="addon-wrapping"
                onChange={handleChange} />
        </div>
        {/* title board */}
        <div className="col mx-3 alert alert-danger" role="alert">
            <h5>Emergency</h5>
        </div>

        <div className="col mx-3 alert alert-warning" role="alert">
            <h5>Urgent</h5>
        </div>

        <div className="col mx-3 alert alert-primary" role="alert">
            <h5>Non-Critical</h5>
        </div>

        <div className='row mx-1 mt-4 align-items-start'>
            {/* Danger group */}
            <ul className='col list-group'>
                {dangerPatientList.map((p) => (
                    <Patient firstName={p.firstName}
                             lastName={p.lastName}
                             emergencyStatus={p.emergencyStatus}
                             key={p.id}
                             id={p.id} />
                ))}
            </ul>
            {/* Warning Group */}
            <ul className='col ms-3 list-group'>
            {warningPatientList.map((p) => (
                    <Patient firstName={p.firstName}
                             lastName={p.lastName}
                             emergencyStatus={p.emergencyStatus}
                             key={p.id}
                             id={p.id} />
                ))}
            </ul>

            <ul className='col ms-3 list-group'>
                {okayPatientList.map((p) => (
                    <Patient firstName={p.firstName}
                             lastName={p.lastName}
                             emergencyStatus={p.emergencyStatus}
                             key={p.id}
                             id={p.id} />
                ))}
            </ul>
        </div>
        


    </div>
  )
}
