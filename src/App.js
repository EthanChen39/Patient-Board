import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Header} from './components/Header'
import { AppProvider } from './context/AppContext';
import { NextPatient } from './components/NextPatient';
import { PatientList } from './components/PatientList';

function App() {
  return (
    <AppProvider>
      <div className="container">
        <Header />
        <NextPatient />
        <PatientList />
      </div>
    </AppProvider>
    
  );
}

export default App;
