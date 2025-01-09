import React from 'react'
import jsPDF from 'jspdf';

interface SaveToPdfProp {
    companyName: string
}

const SaveToPdf: React.FC<SaveToPdfProp> = ({companyName}) => {

    const handleGeneratePdf = () => {
        console.log('generate pdf')
    }

  return (
    <div>
        <button onClick={handleGeneratePdf} type='button'>Generate Pdf</button>
    </div>
  )
}

export default SaveToPdf