import React, { useEffect, useState } from "react";
import { Client, Databases } from "appwrite";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";

const Dashboard = () => {
  const [shiftData, setShiftData] = useState(null);
  const [breakdownData, setBreakdownData] = useState(null);

  // Initialize Appwrite
  const client = new Client();
  client.setEndpoint("https://cloud.appwrite.io/v1").setProject("67a620ba003853499214");
  const databases = new Databases(client);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databases.listDocuments("67a62a0f00267d96a644", "67a663120002a5e3413f");
        console.log("Fetched Data:", response.documents);

        // Filter and map required fields
        const validData = response.documents.map(({ totalProduction, breakdownHours, $createdAt }) => ({
          totalProduction,
          breakdownHours,
          createdAt: new Date($createdAt)
        }));

        // Group data by shifts
        const shifts = { morning: 0, afternoon: 0, night: 0 };
        const breakdowns = { morning: 0, afternoon: 0, night: 0 };

        validData.forEach(({ totalProduction, breakdownHours, createdAt }) => {
          const hours = createdAt.getHours();

          if (hours >= 7 && hours < 15) {
            shifts.morning += totalProduction;
            breakdowns.morning += breakdownHours;
          } else if (hours >= 15 && hours < 23) {
            shifts.afternoon += totalProduction;
            breakdowns.afternoon += breakdownHours;
          } else {
            shifts.night += totalProduction;
            breakdowns.night += breakdownHours;
          }
        });

        setShiftData(shifts);
        setBreakdownData(breakdowns);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);

  // Prepare data for Bar Chart (Production Comparison)
  const barData = shiftData
    ? [
        { shift: "Morning", production: shiftData.morning },
        { shift: "Afternoon", production: shiftData.afternoon },
        { shift: "Night", production: shiftData.night },
      ]
    : [];

  // Prepare data for Pie Chart (Breakdowns per Shift)
  const pieData = breakdownData
    ? [
        { name: "Morning Shift", value: breakdownData.morning },
        { name: "Afternoon Shift", value: breakdownData.afternoon },
        { name: "Night Shift", value: breakdownData.night },
      ]
    : [];

  // Colors for the Pie Chart
  const colors = ["#FF6384", "#36A2EB", "#FFCE56"];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl text-center font-bold mb-8">Shift Production Dashboard</h1>

      {shiftData && breakdownData ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bar Chart - Production Comparison */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Overall Shift Production</h2>
            <BarChart width={400} height={300} data={barData}>
              <XAxis dataKey="shift" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="production" fill="#4CAF50" />
            </BarChart>
          </div>

          {/* Pie Chart - Breakdown Hours */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Breakdown Hours per Shift</h2>
            <PieChart width={400} height={300}>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Dashboard;
