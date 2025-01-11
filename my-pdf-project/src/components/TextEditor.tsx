import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { jsPDF } from 'jspdf';
import html2pdf from 'html2pdf.js';


const TextEditor:React.FC = () => {
    const [editorContent, setEditorContent] = useState<string>('')

    // funt to save PDF
    const saveToPdfFile = () => {
        const content = document.getElementById('editor-content');
    
    if (content) {
      
      html2pdf()
        .from(content) 
        .save('generated-letter.pdf'); 
    }
    }


  return (
    <div className='text-editor'>
        <h2>Edit letter content</h2>

        <ReactQuill value={editorContent} onChange={setEditorContent} placeholder='write your text here...' />

        <button onClick={saveToPdfFile}>Save as PDF</button>

    </div>
  )
}

export default TextEditor