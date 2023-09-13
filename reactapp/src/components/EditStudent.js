// EditStudent.js
import React, { useState, useEffect } from 'react';

function EditStudent({ student, onSave }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (student) {
      setName(student.name);
      setAge(student.age);
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, age });
  };

  return (
    <div className="edit-student">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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

export default EditStudent;
