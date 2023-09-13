// StudentDetails.js
import React from 'react';

function StudentDetails({ student }) {
  if (!student) {
    return <div className="student-details">Select a student to view details.</div>;
  }

  return (
    <div className="student-details">
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      {/* Add more student details as needed */}
    </div>
  );
}

export default StudentDetails;
