import React, { useState } from "react";

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const Change = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="text-center mb-4">Survey Form</h2>
          {submitted ? (
            <div className="alert alert-success text-center fs-5">
              Thank you for your response! We saved your details in our
              database.
            </div>
          ) : (
            <form onSubmit={Submit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    value={formData.name}
                    onChange={Change}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="gender"
                    className="form-control"
                    placeholder="Gender"
                    value={formData.gender}
                    onChange={Change}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="nationality"
                  className="form-control"
                  placeholder="Nationality"
                  value={formData.nationality}
                  onChange={Change}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={Change}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={Change}
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  name="address"
                  className="form-control"
                  placeholder="Address"
                  rows="2"
                  value={formData.address}
                  onChange={Change}
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={Change}
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary px-4">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
