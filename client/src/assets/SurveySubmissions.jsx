import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SurveySubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/admin-login");
    } else {
      fetch("https://mern-survey-backend-85n0.onrender.com/submissions")
        .then((res) => res.json())
        .then((data) => setSubmissions(data))
        .catch((err) => console.error(err));
    }
  }, [navigate]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Survey Submissions</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Nationality</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {submissions.length > 0 ? (
              submissions.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.gender}</td>
                  <td>{item.nationality}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <td>{item.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No submissions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurveySubmissions;
