import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SurveyForm from "./assets/surveyform";
import AdminLogin from "./assets/AdminLogin";
import SurveySubmissions from "./assets/SurveySubmissions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SurveyForm />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/submissions" element={<SurveySubmissions />} />
      </Routes>
    </Router>
  );
}

export default App;
