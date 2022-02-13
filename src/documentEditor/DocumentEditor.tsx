import { useState } from 'react'
import DocumentList, { DocumentInfo } from '../documentList/DocumentList';
import './DocumentEditor.css'

function DocumentEditor() {
  const [selectedDocument, setSelectedDocument] = useState<DocumentInfo|null>(null);

  const onSelectDocument = (selectedDocument: DocumentInfo) => {
    setSelectedDocument(selectedDocument);
  };

  return (
    <div className="document-editor-container">
      <DocumentList onSelectDocument={onSelectDocument} />
        {selectedDocument ?
          <div className="selected-document">
            <h1 className="document-name">{selectedDocument.name}</h1>
            <textarea className="document-content form-item" value={selectedDocument.content} onChange={(event) => selectedDocument.content = event.target.value}/>
          </div>
        :
          <div className='no-document-selected'>No document selected</div>
        }
    </div>
  );
}

export default DocumentEditor;
