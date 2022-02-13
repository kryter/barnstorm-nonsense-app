/// <reference types="cypress" />

import { FlightLeg } from '@kryter/barnstorm/lib/FlightLeg';
import { FlightPlan } from '@kryter/barnstorm/lib/FlightPlan';
import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import { DocumentListTower } from './DocumentListTower';

export interface SelectDocumentOptions {
  documentListTower: DocumentListTower;
}

export function selectDocumentsAndVerifyContent({documentListTower}: SelectDocumentOptions): FlightPlan {
  return {
    legs: [
      selectMyDocument({documentListTower}),
      selectSomeoneElsesDocument({documentListTower})
    ]
  };
}

export function selectMyDocument({documentListTower}: SelectDocumentOptions): FlightLeg {
  return {
    doTestAction: (instruments: InstrumentSet) => {
      documentListTower.myDocumentListItem().click();
    },
    updateExpectations: (instruments: InstrumentSet) => {
      documentListTower.noSelectionMessage().updateState({
        isPresent: false
      });
      documentListTower.selectedDocumentName().updateState({
        isPresent: true,
        textContent: 'My Document'
      });
      documentListTower.selectedDocumentContentTextArea().updateState({
        isPresent: true,
        textContent: 'My Content'
      });
    }
  };
}

export function selectSomeoneElsesDocument({documentListTower}: SelectDocumentOptions): FlightLeg {
  return {
    doTestAction: (instruments: InstrumentSet) => {
      documentListTower.someoneElsesDocumentListItem().click();
    },
    updateExpectations: (instruments: InstrumentSet) => {
      documentListTower.selectedDocumentName().updateState({
        textContent: 'A document belonging to some other concurrent test 2'
      });
      documentListTower.selectedDocumentContentTextArea().updateState({
        textContent: 'Hello 2'
      });
    }
  };
}