import React from 'react';
import {Header} from './components/Header'
import { AppProvider } from './context/AppContext';
import { NextPatient } from './components/NextPatient';
import { PatientList } from './components/PatientList';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { AddPatient } from './components/AddPatient';


function App() {
  return (
    <AppProvider>
      <div className="container">
        <Header />
        <NextPatient />
        <PatientList />
        <div className='mt-5'>
          <AddPatient className='mt-5' />
        </div>
      </div>
    </AppProvider>
    
  );
}

export default App;
