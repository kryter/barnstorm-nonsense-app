import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import { ButtonInstrument, TextAreaInstrument, UIElementInstrument } from '@kryter/barnstorm/lib/instruments';
import { INSTRUMENT_TYPES } from '@kryter/barnstorm/lib/INSTRUMENT_TYPES';

const myDocumentListItem = {
  id: 'myDocumentListItem',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: {
    css: '.document-list-item',
    content: 'My Document'
  },
  initialState: {
  }
};

const someoneElsesDocumentListItem = {
  id: 'someoneElsesDocumentListItem',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: {
    css: '.document-list-item',
    content: 'A document belonging to some other concurrent test 2'
  },
  initialState: {
  }
};


const selectedDocumentName = {
  id: 'selectedDocumentName',
  instrumentType: INSTRUMENT_TYPES.UI_ELEMENT,
  selector: {
    css: '.document-name'
  },
  initialState: {
    textContent: '',
    isPresent: false
  }
};

const selectedDocumentContentTextArea = {
  id: 'selectedDocumentContentTextArea',
  instrumentType: INSTRUMENT_TYPES.TEXT_AREA,
  selector: {
    css: '.document-content'
  },
  initialState: {
    textContent: '',
    isPresent: false
  }
};

const noSelectionMessage = {
  id: 'noSelectionMessage',
  instrumentType: INSTRUMENT_TYPES.UI_ELEMENT,
  selector: {
    css: '.no-document-selected',
  },
  initialState: {
    textContent: 'No document selected'
  }
};

const configs = [
  myDocumentListItem,
  someoneElsesDocumentListItem,
  selectedDocumentName,
  selectedDocumentContentTextArea,
  noSelectionMessage
];

export function setupDocumentListTower(instruments: InstrumentSet) {
  instruments.createInstruments(configs);

  return {
    myDocumentListItem: () => instruments.use<ButtonInstrument>(myDocumentListItem.id),
    someoneElsesDocumentListItem: () => instruments.use<ButtonInstrument>(someoneElsesDocumentListItem.id),
    selectedDocumentName: () => instruments.use<UIElementInstrument>(selectedDocumentName.id),
    selectedDocumentContentTextArea: () => instruments.use<TextAreaInstrument>(selectedDocumentContentTextArea.id),
    noSelectionMessage: () => instruments.use<UIElementInstrument>(noSelectionMessage.id),
    instrumentIds: () => configs.map((config) => config.id)
  };
}

export type DocumentListTower = ReturnType<typeof setupDocumentListTower>;
