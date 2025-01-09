import { useState } from 'react'

import './App.css'

const App: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>('')

  // handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value)
  }

  
  return (
    <div>
      Hello world
    </div>
  )
}

export default App
