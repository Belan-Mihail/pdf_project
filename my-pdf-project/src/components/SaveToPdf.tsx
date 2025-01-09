import React from 'react'
import jsPDF from 'jspdf';

interface SaveToPdfProp {
    companyName: string
}

const SaveToPdf: React.FC<SaveToPdfProp> = ({companyName}) => {


  return (
    <div>
        <button type='button'>Generate Pdf</button>
    </div>
  )
}

export default SaveToPdf