// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import StudentForm from './components/StudentForm';
import EnrollStudent from './components/EnrollStudent';
import EditStudent from './components/EditStudent';

function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  //const [students, setStudents] = useState([]);
  const [isEnrollFormVisible, setIsEnrollFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'John Doe',
      age: 20,
    },
    // Add more student records as needed
  ]);

  // Function to edit a student's details
  const editStudent = (id, newName, newAge) => {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return {
          ...student,
          name: newName,
          age: newAge,
        };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  // Function to delete a student
  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };


  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
    setIsEditFormVisible(false);
  };

  const handleEnrollStudent = (enrollmentData) => {
 
    const newStudent = { id: students.length + 1, ...enrollmentData };
    setStudents([...students, newStudent]);
    setIsEnrollFormVisible(false);
  };

  const handleEditStudent = (editedStudent) => {
    
    const updatedStudents = students.map((student) =>
      student.id === editedStudent.id ? editedStudent : student
    );
    setStudents(updatedStudents);
    setIsEditFormVisible(false);
  };

  return (
    <div className="App">
      <Header />
      <div className="App-container">
       
        <main className="Main-content">
          <StudentList
            students={students}
            onStudentSelect={handleStudentSelect}
          />
          <StudentDetails student={selectedStudent} />
          {isEditFormVisible ? (
            <EditStudent
              student={selectedStudent}
              onSave={handleEditStudent}
              onCancel={() => setIsEditFormVisible(false)}
            />
          ) : isEnrollFormVisible ? (
            <EnrollStudent
              onSave={handleEnrollStudent}
              onCancel={() => setIsEnrollFormVisible(false)}
            />
          ) : (
            <StudentForm
              onSave={handleEnrollStudent}
              onEdit={setIsEditFormVisible}
            />
          )
          }
          
        </main>
      </div>
    </div>
  );
}

export default App;
