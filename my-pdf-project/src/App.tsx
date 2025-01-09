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
    <div>
      Hello world
    </div>
  )
}

export default App
