import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [isNumbers, setNumber] = useState(false);
  const [charecters, setCharecters] = useState(false);
  const [Password, setPassword] = useState("");

  function generateRandomPassword() {
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    /* let validChars = '';
     if (options.hasNumbers) {
         validChars += numbers;
     }
     if (options.hasSymbols) {
         validChars += symbols;
     }
     if (options.hasLowercase) {
         validChars += lowercaseLetters;
     }
     if (options.hasUppercase) {
         validChars += uppercaseLetters;
     }*/

    let randomPassword = '';
    for (let i = 0; i < length; i++) {
      randomPassword += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return randomPassword;
  }


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={Password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        //ref={}
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length} </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isNumbers}
            id="numberInput"
            onChange={()=>{
              setNumber((prev) => !prev)
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charecters}
            id="characterInput"
            onChange={()=>{
              setCharecters((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
