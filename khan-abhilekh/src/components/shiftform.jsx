import React, { useState } from "react";
import { databases } from "../../appwrite";
import { ID } from "appwrite";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ShiftLogForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    district: "",
    seam: "",
    loaders: "",
    machine: "",
    machineName: "",
    workingHours: "",
    breakdownHours: "",
    idleHours: "",
    face: "",
    holesBlasted: "",
    explosiveBlasted: "",
    tubMineCarFactor: "",
    totalProduction: "",
    roofBolting: "",
  });

  const districtOptions = ["District1", "District2"];
  const seamOptions = ["Seam1", "Seam2"];
  const machineOptions = ["SDL", "LHD"];
  const machineNameOptions = ["ka1", "ka2"];
  const faceOptions = ["face1", "face2"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formattedData = {
      ...formData,
      loaders: parseInt(formData.loaders) || 0,
      workingHours: parseInt(formData.workingHours) || 0,
      breakdownHours: parseInt(formData.breakdownHours) || 0,
      idleHours: parseInt(formData.idleHours) || 0,
      holesBlasted: parseInt(formData.holesBlasted) || 0,
      explosiveBlasted: parseInt(formData.explosiveBlasted) || 0,
      tubMineCarFactor: parseInt(formData.tubMineCarFactor) || 0,
      totalProduction: parseInt(formData.totalProduction) || 0,
      roofBolting: parseInt(formData.roofBolting) || 0,
    };

    try {
      await databases.createDocument("67a62a0f00267d96a644", "67a663120002a5e3413f", ID.unique(), formattedData);
      alert("Shift log entry added successfully!");
      setFormData({
        district: "",
        seam: "",
        loaders: "",
        machine: "",
        machineName: "",
        workingHours: "",
        breakdownHours: "",
        idleHours: "",
        face: "",
        holesBlasted: "",
        explosiveBlasted: "",
        tubMineCarFactor: "",
        totalProduction: "",
        roofBolting: "",
      });
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-md border mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Shift Log Entry Form</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[{ name: "district", options: districtOptions }, { name: "seam", options: seamOptions }, { name: "machine", options: machineOptions }, { name: "machineName", options: machineNameOptions }, { name: "face", options: faceOptions }].map((field) => (
          <div key={field.name}>
            <label className="block font-medium text-gray-700 capitalize">{field.name.replace(/([A-Z])/g, " $1").trim()}</label>
            <select name={field.name} value={formData[field.name]} onChange={handleChange} className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select {field.name}</option>
              {field.options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
        {Object.keys(formData).filter(key => !["district", "seam", "machine", "machineName", "face"].includes(key)).map((field) => (
          <div key={field}>
            <label className="block font-medium text-gray-700 capitalize">{field.replace(/([A-Z])/g, " $1").trim()}</label>
            <input type="number" name={field} value={formData[field]} onChange={handleChange} className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        ))}
        <div className="col-span-2 flex justify-center mt-6">
          <button type="submit" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-black transition-all flex items-center gap-2" disabled={loading}>
            {loading ? <AiOutlineLoading3Quarters className="animate-spin"/> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShiftLogForm;
