import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PATIENT':
            return {
                ...state,
                patientList: [...state.patientList, action.payload],
            };
        case 'DELETE_PATIENT':
            return {
                ...state,
                patientList: state.patientList.filter(
                    patient => patient.id !== action.payload
                ),
            };
        default:
            return state;
    }
};


const initialState = {
    patientList: [
        {id: uuidv4(), firstName: "Bridget", lastName: "Walls", age: 22, emergencyStatus: "RED"},
        {id: uuidv4(), firstName: "Zachary", lastName: "Molina", age: 51, emergencyStatus: "YELLOW"},
        {id: uuidv4(), firstName: "Rhonda", lastName: "Case", age: 43, emergencyStatus: "BLUE"},
        {id: uuidv4(), firstName: "Christina", lastName: "Hansen", age: 18, emergencyStatus: "YELLOW"},
        {id: uuidv4(), firstName: "Roger", lastName: "Randall", age: 67, emergencyStatus: "YELLOW"},
        {id: uuidv4(), firstName: "Nicholas", lastName: "Mendoza", age: 55, emergencyStatus: "YELLOW"},
        {id: uuidv4(), firstName: "Dwight", lastName: "Long", age: 34, emergencyStatus: "RED"},
        {id: uuidv4(), firstName: "Erin", lastName: "Day", age: 21, emergencyStatus: "BLUE"},
        {id: uuidv4(), firstName: "Alyssa", lastName: "Howell", age: 12, emergencyStatus: "BLUE"},
        {id: uuidv4(), firstName: "Rekha", lastName: "Gatty", age: 11, emergencyStatus: "RED"},
    ],
};


export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                patientList: state.patientList,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};