import { useRef, useState, useEffect } from "react";
import CodingPage from "./Pages/CodingPage";
import HomePage from "./Pages/HomePage";
import QuestionPage from "./Pages/QuestionPage";
import RegistrationPage from "./Pages/RegistrationPage";
import DisqualifyPage from "./Pages/DisqualifyPage";
import Footer from "./Components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import SubmitPage from "./Pages/SubmitPage";
import InstructionsPage from "./Pages/InstructionsPage";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/code" element={<QuestionPage />} />
        <Route path="/finish" element={<SubmitPage />} />
        <Route path="/disqualified" element={<DisqualifyPage />} />
        <Route path="/instructions" element={<InstructionsPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );

  // return <>{!isDisqualified ? <HomePage /> : <DisqualifyPage />}</>;
}

export default App;
