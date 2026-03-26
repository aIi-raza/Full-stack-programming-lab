import './App.css';

function StudentCard(props) {
  return (
    <div className="card" style={{ backgroundColor: props.color }}>
      <h2>Name: {props.name}</h2>
      <p>Roll No: {props.rollNo}</p>
      <p>Department: {props.department}</p>
      <p>University: {props.university}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Student Information Cards</h1>

      <StudentCard
        name="Ali Hassan"
        rollNo="CS-2021-01"
        department="Computer Science"
        university="COMSATS University"
        color="#d4f1f4"
      />

      <StudentCard
        name="Sara Khan"
        rollNo="EE-2021-07"
        department="Electrical Engineering"
        university="NUST Islamabad"
        color="#ffe5d9"
      />

      <StudentCard
        name="Usman Tariq"
        rollNo="SE-2022-15"
        department="Software Engineering"
        university="FAST-NUCES Lahore"
        color="#d8f3dc"
      />
    </div>
  );
}

export default App;
