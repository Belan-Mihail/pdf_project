import React from 'react'
import jsPDF from 'jspdf';
import textData from '../textData.json';

interface SaveToPdfProp {
    companyName: string
}

const SaveToPdf: React.FC<SaveToPdfProp> = ({companyName}) => {

    const handleGeneratePdf = () => {
        const doc = new jsPDF();

        // Document settings
        const margin = 15;
        const lineHeight = 8;
        const pageWidth = doc.internal.pageSize.width;
        let yPosition = margin;
    }

  return (
    <div>
        <button onClick={handleGeneratePdf} type='button'>Generate Pdf</button>
    </div>
  )
}

export default SaveToPdf