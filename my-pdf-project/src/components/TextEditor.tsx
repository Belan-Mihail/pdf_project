import { FC, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { jsPDF } from 'jspdf';

const TextEditor:React.FC = () => {
    const [editorContent, setEditorContent] = useState<string>('')

    // funt to save PDF
    const saveToPdfFile = () => {
        const doc = new jsPDF();

        // add text content
        doc.text(editorContent, 10, 30)

        doc.save('generated_letter.pdf')
    }


  return (
    <div>TextEditor</div>
  )
}

export default TextEditor