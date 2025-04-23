import './App.css'
import Profile from './components/Profile/Profile'
import userData from './data/userData.json'
function App() { 

  return (
    <>
      <Profile userData = {userData}/>
    </>
  )
}

export default App
