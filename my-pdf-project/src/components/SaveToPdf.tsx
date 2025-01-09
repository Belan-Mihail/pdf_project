import React from 'react'
import jsPDF from 'jspdf';
import textData from '../textData.json';
import { Dispatch, SetStateAction } from 'react';

interface SaveToPdfProp {
    companyName: string
    setCompanyName: Dispatch<SetStateAction<string>>;
}

const SaveToPdf: React.FC<SaveToPdfProp> = ({ companyName, setCompanyName }) => {

    const handleGeneratePdf = () => {
        const doc = new jsPDF();

        // Document settings
        const margin = 8;
        const lineHeight = 4;
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;
        let yPosition = margin;

        textData.forEach((item) => {
            doc.setFont(item.isBold ? 'helvetica' : 'helvetica', item.isBold ? 'bold' : 'normal');
            doc.setFontSize(12);
            
            // Break the text into lines so it doesn't go beyond the page
            const lines = doc.splitTextToSize(item.content.replace("TestName", companyName), pageWidth - 2 * margin);

            // Add text to the document, checking for page overflow
            lines.forEach((line) => {
                if (yPosition + lineHeight > pageHeight - margin) {
                    doc.addPage();  // Add a new page if the text overflows
                    yPosition = margin;  // Reset the position for the new page
                }
                doc.text(line, margin, yPosition);
                yPosition += lineHeight;
            });

            // Add a blank line between paragraphs
            yPosition += lineHeight;

            // Check if we need to add a new page for the next paragraph
            if (yPosition + lineHeight > pageHeight - margin) {
                doc.addPage();
                yPosition = margin;
            }
        });

        
        // Generate PDF
        doc.save('letter.pdf');
        
        setCompanyName('')
    }

    return (
        <div>
            <button onClick={handleGeneratePdf} type='button'>Generate Pdf</button>
        </div>
    )
}

export default SaveToPdf;
