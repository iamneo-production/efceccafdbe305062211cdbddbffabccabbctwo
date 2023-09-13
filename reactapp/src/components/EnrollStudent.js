// EnrollStudent.js
import React, { useState } from 'react';

function EnrollStudent({ onEnroll }) {
  const [studentName, setStudentName] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onEnroll({ studentName, course });
    setStudentName('');
    setCourse('');
  };

  return (
    <div className="enroll-student">
      <h2>Enroll Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button type="submit">Enroll</button>
      </form>
    </div>
  );
}

export default EnrollStudent;
