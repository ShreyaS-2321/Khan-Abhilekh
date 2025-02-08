import React, { useEffect, useState } from "react";
import { Client, Databases } from "appwrite";

const ShiftLogTable = () => {
  const [shiftLogs, setShiftLogs] = useState([]);
  const client = new Client();

  client.setEndpoint("https://cloud.appwrite.io/v1").setProject("67a620ba003853499214");
  const databases = new Databases(client);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databases.listDocuments("67a62a0f00267d96a644", "67a663120002a5e3413f");
        setShiftLogs(response.documents);
      } catch (error) {
        console.error("Error fetching shift logs:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center ">Shift Log Data</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-300">
            <tr>
              <th className="border px-4 py-2">Shift ID</th>
              <th className="border px-4 py-2">District</th>
              <th className="border px-4 py-2">Seam</th>
              <th className="border px-4 py-2">Face</th>
              <th className="border px-4 py-2">Machine</th>
              <th className="border px-4 py-2">Machine Name</th>
              <th className="border px-4 py-2">Breakdown</th>
              <th className="border px-4 py-2">Production (TON)</th>
              <th className="border px-4 py-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {shiftLogs.length > 0 ? (
              shiftLogs.map((log) => (
                <tr key={log.$id} className="border-b">
                  <td className="border px-4 py-2">{log.$id}</td>
                  <td className="border px-4 py-2">{log.district}</td>
                  <td className="border px-4 py-2">{log.seam}</td>
                  <td className="border px-4 py-2">{log.face}</td>
                  <td className="border px-4 py-2">{log.machine}</td>
                  <td className="border px-4 py-2">{log.machineName}</td>
                  <td className="border px-4 py-2">{log.breakdownHours}</td>
                  <td className="border px-4 py-2">{log.totalProduction}</td>
                  <td className="border px-4 py-2">{new Date(log.$createdAt).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShiftLogTable;
