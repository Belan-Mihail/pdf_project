import { FC, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { jsPDF } from 'jspdf';

const TextEditor:React.FC = () => {
    const [editorContent, setEditorContent] = useState<string>('')

    
  return (
    <div>TextEditor</div>
  )
}

export default TextEditor