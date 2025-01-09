import { useState } from 'react'

import './App.css'

const App: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>('')

  
  return (
    <div>
      Hello world
    </div>
  )
}

export default App
