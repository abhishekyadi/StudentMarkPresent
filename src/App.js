import React from 'react';
import StudentCard from './components/StudentCard'; // Correct path to StudentCard.js

const studentData = [
  { id: 1, name: 'Abhishek' },
  { id: 2, name: 'Kumar' },
  { id: 3, name: 'Shivam' },
  { id: 4, name: 'Sparsh' },
  { id: 5, name: 'Nishant' },
  { id: 6, name: 'Amod' },
  { id: 7, name: 'Himanshu' },
  { id: 9, name: 'Atharva' },
  { id: 10, name: 'Salini' },
  { id: 11, name: 'Ajay' },
  { id: 12, name: 'Bashkar' },
  { id: 13, name: 'Nishchal' },
  { id: 14, name: 'Shukla' },
  { id: 15, name: 'Samuel' },
  { id: 16, name: 'Om' },
  { id: 17, name: 'Namah' },
  { id: 18, name: 'Shivay' },
  { id: 19, name: 'Sree' },
  { id: 20, name: 'Ritika' },
  { id: 21, name: 'Harsh' },
  { id: 22, name: 'Aditya' },
  { id: 23, name: 'Ishika' },
  { id: 24, name: 'Sneha' },
  { id: 25, name: 'Priti' },
  { id: 26, name: 'Mihir' },
  { id: 27, name: 'Jahnavi' },
  { id: 28, name: 'Kshitiz' },
  { id: 29, name: 'Ankit' },
  { id: 30, name: 'Brijesh' },
  { id: 31, name: 'Sonia' },
  
];

function App() {
  return (
    <div className="App">
      <h1>Class Attendance System</h1>
      <div className="student-list">
        {studentData.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default App;
