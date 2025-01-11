import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import html2pdf from 'html2pdf.js';

const TextEditor: React.FC = () => {
  const [editorContent, setEditorContent] = useState<string>('');

  
  const saveToPdf = () => {
    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = editorContent;  

    
    const options = {
      margin: 0,
      filename: 'generated-letter.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    
    html2pdf()
      .from(contentDiv)
      .set(options)
      .save();
  };

  return (
    <div className="text-editor">
      <h2>Edit Letter Content</h2>

      <ReactQuill
        value={editorContent}
        onChange={setEditorContent}
        placeholder="Write your letter here..."
      />

      <button onClick={saveToPdf}>Save as PDF</button>
    </div>
  );
};

export default TextEditor;
