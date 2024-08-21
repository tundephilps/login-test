import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import "./App.css";
import Login from "./components/auth/login";
import ResetPassword from "./components/auth/ResetPassword";
import ResetPasswordForm from "./components/auth/ResetPasswordForm";
import ResetPasswordLink from "./components/auth/ResetPasswordLink";
import ResetPasswordComplete from "./components/auth/ResetPasswordComplete";
import Step1 from "./components/onboarding/Step1";
import Step2 from "./components/onboarding/Step2";
import Step3 from "./components/onboarding/Step3";

import Step4 from "./components/onboarding/Step4";

import Step5 from "./components/onboarding/Step5";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/" element={<ResetPassword />} /> */}

        {/* <Route path="/" element={<ResetPasswordForm />} /> */}

        {/* <Route path="/" element={<ResetPasswordLink />} /> */}

        {/* <Route path="/" element={<ResetPasswordComplete />} /> */}
        {/* <Route path="/" element={<Step1 />} /> */}

        {/* <Route path="/" element={<Step2 />} /> */}

        {/* <Route path="/" element={<Step3 />} /> */}

        {/* <Route path="/" element={<Step4 />} /> */}

        <Route path="/" element={<Step5 />} />
        {/* <Route path="/onboarding" element={<Onboarding />}>
          <Route path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
          <Route path="step4" element={<Step4 />} />
          <Route path="step5" element={<Step5 />} />
          <Route path="step6" element={<Step6 />} />
        </Route> */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
