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
        const leftMargin = 10;
        const rightMargin = 10;
        const margin = leftMargin;
        const lineHeight = 4;
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;
        let yPosition = margin;

        textData.forEach((item) => {
            doc.setFont(item.isBold ? 'helvetica' : 'helvetica', item.isBold ? 'bold' : 'normal');
            doc.setFontSize(12);

            if (item.type === 'list') {
                // If the type is "list", process as a list
                if (Array.isArray(item.content)) {
                    item.content.forEach((listItem: string) => {
                        if (yPosition + lineHeight > pageHeight - margin) {
                            doc.addPage(); // Add a new page if the text overflows
                            yPosition = margin;
                        }
                        doc.text(`• ${listItem}`, leftMargin, yPosition);  // Use a bullet point for lists
                        yPosition += lineHeight;
                    });
                }
            } else {
                // For other types (header, subheader, paragraph)
                const content = Array.isArray(item.content) ? item.content.join(' ') : item.content; // Ensure content is a string
                const lines = doc.splitTextToSize(content.replace("TestName", companyName), pageWidth - leftMargin - rightMargin);
                
                // Add text with justification for paragraphs
                lines.forEach((line) => {
                    if (yPosition + lineHeight > pageHeight - margin) {
                        doc.addPage();
                        yPosition = margin;
                    }
                    doc.text(line, leftMargin, yPosition);  // Add normal text
                    yPosition += lineHeight;
                });
            }

            // Add a blank line between paragraphs
            yPosition += lineHeight;

            // Check for page overflow
            if (yPosition + lineHeight > pageHeight - margin) {
                doc.addPage();
                yPosition = margin;
            }
        });

        // Generate PDF
        doc.save('letter.pdf');
        
        setCompanyName(''); // Clear company name after saving
    }

    return (
        <div>
            <button onClick={handleGeneratePdf} type='button'>Generate Pdf</button>
        </div>
    )
}

export default SaveToPdf;
