import './App.css'
import AddEventForm from './components/AddEventForm'

function App() {

  return (
   <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Add New Event</h1>
      <AddEventForm></AddEventForm>
    </div>
  )
}

export default App
