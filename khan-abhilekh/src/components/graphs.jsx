import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { Client, Databases } from "appwrite";
import { useState, useEffect} from 'react';

const Graphs = () =>{
    const [shiftData, setShiftData] = useState(null);

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
const xLabels = [
    { shift: "Morning", production: shiftData.morning },
    { shift: "Afternoon", production: shiftData.afternoon },
    { shift: "Night", production: shiftData.night },
];
  return (
    <LineChart
    width={500}
    height={300}
    series={[
      { data: shift.morning, label: 'Morning shift' },
      { data: shift.afternoon, label: 'Afternoon shift' },
      { data: shift.night, label: 'Night shift' },
    ]}
    xAxis={[{ scaleType: 'point', data: xLabels }]}
  />
  )
}

export default Graphs;