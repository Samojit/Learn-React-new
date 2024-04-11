
import './App.css'
import Card from './components/Card'

function App() {

  // let myObj = {
  //   "title": "Hello",
  //   "btnText": "Click here"
  // }

  return (
    <>
     <h1 className='bg-blue-600 text-black rounded-xl p-5 mb-2'>Tailwind</h1>
     <Card userName="Samojit" btnText="Click There"/>
     <Card userName = "Samo" btnText="Click Here"/>
    </>
  )
}

export default App
