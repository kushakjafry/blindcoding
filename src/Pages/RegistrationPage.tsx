import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/variables";

function RegistrationPage() {
  const [form, setForm] = useState<any>(new Object());

  const handleFormInputChange = (e: any) => {
    const copyForm = { ...form };
    copyForm[e.target.name] = e.target.value;
    console.log(copyForm);
    setForm(copyForm);
  };

  const navigate = useNavigate();

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (
      !("name" in form) ||
      !("email" in form) ||
      !("year" in form) ||
      !("admissionNumber" in form) ||
      form["name"].length === 0 ||
      form["email"].length === 0 ||
      form["year"].length === 0 ||
      form["admissionNumber"].length === 0
    ) {
      console.warn("Not Correct form");
      return;
    }
    const { data } = await axios.post(`${API_URL}register`, form);
    localStorage.setItem("candidate", JSON.stringify(form));
    navigate("/code", { state: { time: data } });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg w-full md:w-2/3 lg:w-1/3 sm:w-2/3">
        <h3 className="text-2xl font-bold text-center">Blind Code</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="Name">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleFormInputChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-face-purple"
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                name="email"
                type="text"
                placeholder="Email"
                onChange={handleFormInputChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-face-purple"
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="admissionNumber">
                Admission Number
              </label>
              <input
                name="admissionNumber"
                type="text"
                placeholder="Admission Number"
                onChange={handleFormInputChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-face-purple"
              />
            </div>
            <div className="mt-4">
              <label className="block">Year</label>
              <select
                name="year"
                placeholder="Select A Year"
                onChange={handleFormInputChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-face-purple"
              >
                <option disabled selected>
                  Select A Year
                </option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="flex">
              <button className="w-full px-6 py-2 mt-4 text-white bg-face-purple rounded-lg hover:bg-[#7688ed]">
                Start the Test
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
