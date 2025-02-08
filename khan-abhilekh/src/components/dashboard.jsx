import React, { useEffect, useState } from "react";
import { Client, Databases } from "appwrite";
import { Bar, Pie, Line } from "recharts";

const Dashboard = () => {
  const [data, setData] = useState(null);

  const client = new Client();
  client.setEndpoint("https://cloud.appwrite.io/v1").setProject("67a620ba003853499214");
  const databases = new Databases(client);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databases.listDocuments("67a62a0f00267d96a644", "67a663120002a5e3413f");
        setData(response.documents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Shift Production Dashboard</h1>
      {data ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Overall Production</h2>
            <Bar data={data} />
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Shift-wise Production</h2>
            <Pie data={data} />
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Breakdowns</h2>
            <Line data={data} />
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Export Report</button>
    </div>
  );
};

export default Dashboard;
