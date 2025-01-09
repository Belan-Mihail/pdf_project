import { useState } from 'react'

import './App.css'

const App: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>('')

  // handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value)
  }

  // handleGeneratePdf
  const handleGeneratePdf = () => {
    console.log('generate pdf')
  }


  return (
    <div className='App'>
      <h1>Generate Letter</h1>

      <div className="input-container">
        <label htmlFor="companyName">Company Name:</label>
        <input type="text" value={companyName} onChange={handleInputChange} id='companyName' placeholder='Enter name of company..' />
      </div>
    </div>
  )
}

export default App
