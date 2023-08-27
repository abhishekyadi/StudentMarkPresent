import React from 'react';

const AttendanceButton = ({ isPresent, toggleAttendance }) => {
  return (
    <button className={`attendance-button ${isPresent ? 'present' : 'absent'}`} onClick={toggleAttendance}>
      {isPresent ? 'Present' : 'Absent'}
    </button>
  );
};

export default AttendanceButton;
