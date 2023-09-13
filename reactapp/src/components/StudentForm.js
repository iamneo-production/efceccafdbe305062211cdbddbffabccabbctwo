// StudentForm.js
import React, { useState } from 'react';

function StudentForm({ onSave }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, age });
    setName('');
    setAge('');
  };

  return (
    <div className="student-form">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
      <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <label>Age</label>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default StudentForm;
