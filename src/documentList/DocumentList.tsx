import React from 'react'
import './DocumentList.css'

export interface DocumentInfo {
  id: string;
  name: string;
  content: string;
}

const DOCUMENT_LIST: DocumentInfo[] = [
  {
    id: 'abc123',
    name: 'A document belonging to some other concurrent test 1',
    content: 'Hello 1'
  },
  {
    id: 'def123',
    name: 'A document belonging to some other concurrent test 2',
    content: 'Hello 2'
  },
  {
    id: 'ghi123',
    name: 'My Document',
    content: 'My Content'
  },
  {
    id: 'jkl123',
    name: 'A document belonging to some other concurrent test 3',
    content: 'Hello 3'
  },
  {
    id: 'mno123',
    name: 'A document belonging to some other concurrent test 4',
    content: 'Hello 4'
  },
  {
    id: 'pqr123',
    name: 'A document belonging to some other concurrent test 5',
    content: 'Hello 5'
  },
];

function DocumentList({onSelectDocument }: {onSelectDocument:(selectedDocument: DocumentInfo) => void}) {
  return (
    <div>
      <ul className="document-list">
        {DOCUMENT_LIST.map((documentInfo) => (
          <li className="document-list-item" key={documentInfo.id} onClick={() => onSelectDocument(documentInfo)}>{documentInfo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentList;
