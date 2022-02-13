/// <reference types="cypress" />

import { useAirplane, FlyFunction } from '@kryter/barnstorm/lib/useAirplane';
import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import { useInstruments } from '../../barnstorm/useInstruments';
import { useUrls } from '../../barnstorm/useUrls';
import { DocumentListTower, setupDocumentListTower } from '../../barnstorm/documentList/DocumentListTower';
import { selectDocumentsAndVerifyContent } from '../../barnstorm/documentList/DocumentListFlightPlans';

describe('DocumentListSpec', () => {
  let instruments: InstrumentSet;
  let fly: FlyFunction;
  let documentListTower: DocumentListTower;

  it('Setup instruments and pages, and visit the entry url', () => {
    instruments = useInstruments();
    fly = useAirplane(instruments);
    documentListTower = setupDocumentListTower(instruments);

    instruments.url().visit(useUrls().documentsUrl);
  });

  it('Verify initial state', () => {
    instruments.verifyState();
  });

  it('Select documents and verify their content', () => {
    fly(selectDocumentsAndVerifyContent({
      documentListTower
    }));
  });
});
