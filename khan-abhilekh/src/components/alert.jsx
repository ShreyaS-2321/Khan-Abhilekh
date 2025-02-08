import React from "react";
import { useState } from "react";
import { databases } from "../../appwrite";
import { ID } from "appwrite";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Alertpage = () => {
  const [loading, setLoading] = useState(false);
  const [alertData, setAlertData] = useState({
    district: "",
    alertlevel: "",
    alertcause1: "",
    alertcause2: "",
    alertcause3: "",
  });

  const districtOptions = ["district1", "district2", "district3", "district4"];
  const alertLevelOption = ["Critcial", "Moderate", "Low"];
  const alertCauseOption1 = [
    "Cave_ins_and_Collapses",
    "GasExplosions",
    "Flooding",
  ];
  const alertCauseOption2 = [
    "Ground_Control_Hazards",
    "improper_ventilation",
    "heat_stress",
  ];
  const alertCauseOption3 = ["Equipment_Malfunctions", "minor_injury"];

  const handleChange = (e) => {
    setAlertData({ ...alertData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await databases.createDocument(
        "67a62a0f00267d96a644",
        "67a69d2b001432b735c4",
        ID.unique()
        //   formattedData
      );
      alert("Alert raised successfully!");
      setAlertData({
        district: "",
        alertlevel: "",
        alertcause1: "",
        alertcause2: "",
        alertcause3: "",
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
      <form
        onSubmit={handleSubmit}
        className="grid grid-row-5 md:grid-cols-2 gap-6"
      >
        {[
          { name: "District", options: districtOptions },
          { name: "Alert Level", options: alertLevelOption },
          { name: "Alert Cause1", options: alertCauseOption1 },
          { name: "Alert Cause2", options: alertCauseOption2 },
          { name: "Alert Cause3", options: alertCauseOption3 },
        ].map((field) => (
          <div key={field.name}>
            <label className="block font-medium text-gray-700 capitalize">
              {field.name.replace(/([A-Z])/g, " $1").trim()}
            </label>
            <select
              name={field.name}
              value={alertData[field.name]}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="">Select {field.name}</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        {Object.keys(alertData)
          .filter(
            (key) =>
              ![
                "district",
                "alertlevel",
                "alertcause1",
                "alertcause2",
                "alertcause3",
              ].includes(key)
          )
          .map((field) => (
            <div key={field}>
              <label className="block font-medium text-gray-700 capitalize">
                {field.replace(/([A-Z])/g, " $1").trim()}
              </label>
              <input
                type="number"
                name={field}
                value={alertData[field]}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          ))}
        <div className="col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-black transition-all flex items-center gap-2"
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
