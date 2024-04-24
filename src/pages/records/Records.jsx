import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./records.css";
import Header from "../../components/header/Header";

export default function Records() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/students");
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="records-container">
        <h2>Students Table</h2>
        <table className="records-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>RFID Badge Number</th>
              <th>entrance time</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.studentId}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.rfidBadgeNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
    );
  }
