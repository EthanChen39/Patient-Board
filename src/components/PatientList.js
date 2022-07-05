import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import '../App.css'
import { Patient } from './Patient';

export const PatientList = () => {
        const { patientList } = useContext(AppContext);
        // Danger patient list
        const dangerPatientList = patientList.filter(patient => patient.emergencyStatus === "RED");
        // Warning patient list
        const warningPatientList = patientList.filter(patient => patient.emergencyStatus === "YELLOW");
        // Okay patient list
        const okayPatientList = patientList.filter(patient => patient.emergencyStatus === "BLUE");
  return (
    <div className='row mt-5 align-items-start'>
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
