import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Onboarding from './components/onboarding/onboarding';
import Step1 from './components/onboarding/step1/step1';
import Step2 from './components/onboarding/step2/step2';
import Step3 from './components/onboarding/step3/step3';
import Step4 from './components/onboarding/step4/step4';
import Step5 from './components/onboarding/step5/step5';
import Step6 from './components/onboarding/step6/step6';
import Dashboard from './components/dashboard/dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />}>
          <Route path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
          <Route path="step4" element={<Step4 />} />
          <Route path="step5" element={<Step5 />} />
          <Route path="step6" element={<Step6 />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
