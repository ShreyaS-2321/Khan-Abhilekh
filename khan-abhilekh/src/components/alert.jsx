import React, { useState } from "react";
import { databases } from "../../appwrite";
import { ID } from "appwrite";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Alertpage = () => {
  const [loading, setLoading] = useState(false);
  const [alertData, setAlertData] = useState({
    district: "",
    alertlevel: "",
    alertcause: "",
  });

  const districtOptions = ["District1", "District2", "District3", "District4"];
  const alertLevelOptions = ["Critical", "Moderate", "Low"];
  const alertCauseOptions = [
    "Cave_ins_and_Collapses",
    "Gas_Explosions",
    "Flooding",
    "Ground_Control_Hazards",
    "Improper_Ventilation",
    "Heat_Stress",
    "Equipment_Malfunctions",
    "Minor_Injury",
    "Major_Injury",
  ];

  const handleChange = (e) => {
    setAlertData({ ...alertData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await databases.createDocument(
        "67a62a0f00267d96a644", // Database ID
        "67a69d2b001432b735c4", // Collection ID
        ID.unique(),
        alertData // Corrected: Passing the selected values
      );

      alert("Alert raised successfully!");
      setAlertData({
        district: "",
        alertlevel: "",
        alertcause: "",
      });
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-md border mt-16">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
        Alert Raise Form
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Dropdown Fields */}
        {[
          { label: "District", name: "district", options: districtOptions },
          { label: "Alert Level", name: "alertlevel", options: alertLevelOptions },
          { label: "Alert Cause", name: "alertcause", options: alertCauseOptions },
        ].map((field) => (
          <div key={field.name}>
            <label className="block font-medium text-gray-700">
              {field.label}
            </label>
            <select
              name={field.name}
              value={alertData[field.name]}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            >
              <option value="">Select {field.label}</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option.replace(/_/g, " ")}
                </option>
              ))}
            </select>
          </div>
        ))}

        {/* Submit Button */}
        <div className="md:col-span-3 flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all flex items-center gap-2 cursor-pointer"
            disabled={loading}
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="animate-spin" />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Alertpage;