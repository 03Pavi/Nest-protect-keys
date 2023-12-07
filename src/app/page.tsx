// pages/index.js
"use client";
import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchHello = async () => {
      try {
        const res = await axios.get(`/api/data`);
        console.log("Response:", res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchHello();
  }, []);

  return (
    <div>
      <h1>Next.js App Connected to API</h1>
      <ul>
        {data.map((item) => (
          // <li key={item.id}>{item.name}</li>
          <h1 key={item}>hllo</h1>
        ))}
      </ul>
    </div>
  );
};

export default Home;
