import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          
    {
          <div>
            <h1>Student Info</h1>
            <StudentCard name="Ali" id="202250700" dept="SWE" />
            <StudentCard name="Zeyad" id="2022xxxxx" dept="ICS" />
          </div> 
    }
        </div>   
      </main>
    </div>
  )
}

export default App
