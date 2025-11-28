import React, { useState } from 'react';

const CourseRegistration = () => {
  const [course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (course) {
        alert(`Registering for course: ${course}`);
    } else {
        alert("Please select a course before registering.");
    }
  };

  return (
    <div className="course-registration" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', margin: '50px auto' }}>
      <h2>📝 Course Registration</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label htmlFor="course-select">Select a Course:</label>
          <select
            id="course-select"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          >
            <option value="">-- Choose a Course --</option>
            <option value="CS101">Intro to Programming</option>
            <option value="MATH205">Calculus III</option>
            <option value="ENG310">Creative Writing</option>
          </select>
        </div>
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Register
        </button>
      </form>
      {course && (
        <p style={{ marginTop: '15px', color: '#007bff' }}>Currently selected: **{course}**</p>
      )}
    </div>
  );
};

export default CourseRegistration;