import React, { useEffect, useState } from "react";
import { databases } from "../../appwrite";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AlertLogs = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await databases.listDocuments(
          "67a62a0f00267d96a644", // Database ID
          "67a69d2b001432b735c4"  // Collection ID
        );
        setAlerts(response.documents);
      } catch (error) {
        alert("Error fetching alerts: " + error.message);
      }
      setLoading(false);
    };

    fetchAlerts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-md border mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
        Alert Logs
      </h2>

      {loading ? (
        <div className="flex justify-center">
          <AiOutlineLoading3Quarters className="animate-spin text-4xl text-gray-500" />
        </div>
      ) : alerts.length === 0 ? (
        <p className="text-center text-gray-500">No alerts found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-3">District</th>
                <th className="border border-gray-300 p-3">Alert Level</th>
                <th className="border border-gray-300 p-3">Alert Cause</th>
                <th className="border border-gray-300 p-3">Created At</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert) => (
                <tr key={alert.$id} className="text-center">
                  <td className="border border-gray-300 p-3">{alert.district}</td>
                  <td className="border border-gray-300 p-3">{alert.alertlevel}</td>
                  <td className="border border-gray-300 p-3">
                    {alert.alertcause.replace(/_/g, " ")}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {new Date(alert.$createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AlertLogs;