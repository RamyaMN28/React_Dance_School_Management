import React, { useEffect, useState } from 'react';
import './DashboardPage.css';
import Navbar from './Navbar';  

const initialScheduleData = [
  {
    className: 'Hip Hop',
    instructor: 'Anita G.',
    day: 'Tuesday',
    time: '11:00 AM - 12:30 PM',
    status: 'Taken Charge'
  },
  {
    className: 'Ballet',
    instructor: 'Anita G.',
    day: 'Wednesday',
    time: '2:00 PM - 3:30 PM',
    status: 'Taken Charge'
  },
  {
    className: 'Jazz',
    instructor: 'Anita G.',
    day: 'Thursday',
    time: '4:00 PM - 5:30 PM',
    status: 'Taken Charge'
  }
];

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [instructorClasses, setInstructorClasses] = useState([]);
  const [newClass, setNewClass] = useState({
    className: '',
    day: '',
    time: '',
  });

  useEffect(() => {
    const storedName = localStorage.getItem('userName') || 'Anita G.';
    const storedRole = localStorage.getItem('userRole') || 'instructor';

    setUserName(storedName);
    setUserRole(storedRole);

    const filtered = initialScheduleData.filter(cls => cls.instructor === storedName);
    setInstructorClasses(filtered);
  }, []);

  const handleAddClass = (e) => {
    e.preventDefault();
    const newEntry = {
      ...newClass,
      instructor: userName,
      status: 'Taken Charge'
    };
    setInstructorClasses(prev => [...prev, newEntry]);
    setNewClass({ className: '', day: '', time: '' }); // Clear form
  };

  return (
    
    <div className="container mt-5 mb-5 dashboard-bg rounded shadow-sm p-4">
      <Navbar></Navbar>
      <h2 className="text-success mb-4 fw-bold">Welcome, {userName}</h2>

      {userRole === 'instructor' ? (
        <>
          {/* Add New Class Form */}
          <div className="card border-success mb-4 shadow">
            <div className="card-header bg-success text-white fw-semibold">
              Add a New Class
            </div>
            <div className="card-body">
              <form onSubmit={handleAddClass}>
                <div className="row g-3">
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Class Name"
                      value={newClass.className}
                      onChange={(e) => setNewClass({ ...newClass, className: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Day"
                      value={newClass.day}
                      onChange={(e) => setNewClass({ ...newClass, day: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Time (e.g., 1:00 PM - 2:30 PM)"
                      value={newClass.time}
                      onChange={(e) => setNewClass({ ...newClass, time: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="mt-3 text-end">
                  <button type="submit" className="btn btn-success">Add Class</button>
                </div>
              </form>
            </div>
          </div>

          {/* Existing Schedule Table */}
          <div className="card border-success shadow">
            <div className="card-header bg-success text-white fw-semibold">
              Your Scheduled Classes
            </div>
            <div className="card-body table-responsive">
              <table className="table table-bordered table-striped table-hover align-middle text-center">
                <thead className="table-success">
                  <tr>
                    <th>Class Name</th>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {instructorClasses.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-muted">No classes assigned.</td>
                    </tr>
                  ) : (
                    instructorClasses.map((cls, index) => (
                      <tr key={index}>
                        <td>{cls.className}</td>
                        <td>{cls.day}</td>
                        <td>{cls.time}</td>
                        <td><span className="badge bg-success">{cls.status}</span></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="alert alert-warning mt-3">Student dashboard not available.</div>
      )}
    </div>
  );
};

export default Dashboard;
