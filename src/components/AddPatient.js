import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

export const AddPatient = () => {
  const { dispatch } = useContext(AppContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [emergencyStatus, setEmergencyStatus] = useState("");

  const handleSelectChange = e => {
    setEmergencyStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPatient = {
      id: uuidv4(),
      firstName,
      lastName,
      age,
      emergencyStatus,
    };
    dispatch({
      type: "ADD_PATIENT",
      payload: newPatient
    });
    setFirstName("");
    setLastName("");
    setAge("");
  };

  return (
    <>
    <h2 className='mb-3'>Add Patient</h2>
    <form className='mb-4' onSubmit={handleSubmit}>
        {/* First Name Input */}
        <div className="form-floating mb-3">
          <input type="text" 
          className="form-control" 
          id="floatingInput" 
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required="required" />
          <label>First Name</label>
        </div>

        {/* Last Name Input */}
        <div className="form-floating mb-3">
          <input type="text" 
          className="form-control" 
          id="floatingLastName" 
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required="required" />
          <label>Last Name</label>
        </div>

        {/* Age Input */}
        <div className="form-floating mb-3">
          <input type="number" 
          className="form-control" 
          id="floatingAge" 
          placeholder="Age"
          value={age}
          onChange={e => setAge(parseInt(e.target.value))}
          required="required" />
          <label>Age</label>
        </div>

        {/* Emergency Status Select */}
        <select 
                className="form-select" 
                aria-label="Emergency Status"
                onChange={handleSelectChange}>
          <option defaultValue>Select Emergency Status</option>
          <option value="RED">RED</option>
          <option value="YELLOW">YELLOW</option>
          <option value="BLUE">BLUE</option>
        </select>


        <button type='submit' className='btn btn-success btn-m mt-3'>Add</button>
    </form>
    
    </>
  )
}
