// StudentList.js
import React from 'react';

function StudentList({ students, onStudentSelect }) {
  return (
    <div className="student-list">
      <h2>View Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <a href="#" onClick={() => onStudentSelect(student)}>
              {student.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
