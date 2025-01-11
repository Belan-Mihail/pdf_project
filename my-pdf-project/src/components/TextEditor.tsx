import { useState } from 'react';
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
    <div className='text-editor'>
        <h2>Edit letter content</h2>

        <ReactQuill value={editorContent} onChange={setEditorContent} placeholder='write your text here...' />

        <button onClick={saveToPdfFile}>Save as PDF</button>

    </div>
  )
}

export default TextEditor