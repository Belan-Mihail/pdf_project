
import { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { jsPDF } from 'jspdf';
import html2pdf from 'html2pdf.js'; 

const TextEditor: React.FC = () => {
  const [editorContent, setEditorContent] = useState<string>('');
  
  
  const editorRef = useRef<ReactQuill | null>(null);

  
  const saveToPdfFile = () => {
    if (editorRef.current) {
      
      const content = editorRef.current.root.innerHTML; 

      
      if (content) {
        const element = document.createElement('div');
        element.innerHTML = content;  
        html2pdf().from(element).save('generated-letter.pdf');  // 
      }
    }
  };

  return (
    <div className="text-editor">
      <h2>Edit Letter Content</h2>

      {/*  ReactQuill with ref */}
      <ReactQuill 
        value={editorContent} 
        onChange={setEditorContent} 
        placeholder="Write your text here..." 
        ref={editorRef} 
      />

      <button onClick={saveToPdfFile}>Save as PDF</button>
    </div>
  );
};

export default TextEditor;
