import React, { useState } from 'react';
import AttendanceButton from './AttendanceButton';

const StudentCard = ({ student }) => {
  const [isPresent, setIsPresent] = useState(false);

  const toggleAttendance = () => {
    setIsPresent(!isPresent);
  };

  return (
    <div className={`student-card ${isPresent ? 'present' : 'absent'}`}>
      <h2>{student.name}</h2>
      <AttendanceButton isPresent={isPresent} toggleAttendance={toggleAttendance} />
    </div>
  );
};

export default StudentCard;
