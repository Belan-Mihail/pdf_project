import { useState } from 'react'

import './App.css'
import SaveToPdf from './components/SaveToPdf'

const App: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>('')

  // handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value)
  }

  

  return (
    <div className='App'>
      
        <h1>Generate Letter</h1>

      <div className="input-container">
        <label htmlFor="companyName">Company Name:</label>
        <input type="text" value={companyName} onChange={handleInputChange} id='companyName' placeholder='Enter name of company..' />
      </div>

      {companyName && <SaveToPdf companyName={companyName} />}
      
      
    </div>
  )
}

export default App
