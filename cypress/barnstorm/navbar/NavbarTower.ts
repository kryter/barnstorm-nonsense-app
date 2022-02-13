import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import { ButtonInstrument, UIElementInstrument } from '@kryter/barnstorm/lib/instruments';
import { INSTRUMENT_TYPES } from '@kryter/barnstorm/lib/INSTRUMENT_TYPES';

const navbarHeading = {
  id: 'navbarHeading',
  instrumentType: INSTRUMENT_TYPES.UI_ELEMENT,
  selector: {
    css: '.app-title'
  },
  initialState: {
    textContent: 'Barnstorm Nonsense'
  }
};

const openModalButton = {
  id: 'openModalButton',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: {
    css: '.open-modal-button'
  },
  initialState: {
    textContent: 'Open Modal'
  }
};

const navbarLoginTab = {
  id: 'navbarLoginTab',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: {
    css: '.navbar-tab-button.navbar-tab-login'
  },
  initialState: {
    textContent: 'Login'
  }
};

const navbarTableTab = {
  id: 'navbarTableTab',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: {
    css: '.navbar-tab-button.navbar-tab-table'
  },
  initialState: {
    textContent: 'Table'
  }
};

const navbarCounterTab = {
  id: 'navbarCounterTab',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: {
    css: '.navbar-tab-button.navbar-tab-counter'
  },
  initialState: {
    textContent: 'Counter'
  }
};

const navbarDocumentsTab = {
  id: 'navbarDocumentsTab',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: {
    css: '.navbar-tab-button.navbar-tab-documents'
  },
  initialState: {
    textContent: 'Documents'
  }
};

const configs = [
  navbarHeading,
  openModalButton,
  navbarTableTab,
  navbarCounterTab,
  navbarDocumentsTab
];

export function setupNavbarTower(instruments: InstrumentSet) {
  instruments.createInstruments(configs);

  return {
    navbarHeading: () => instruments.use<UIElementInstrument>(navbarHeading.id),
    openModalButton: () => instruments.use<ButtonInstrument>(openModalButton.id),
    navbarLoginTab: () => instruments.use<ButtonInstrument>(navbarLoginTab.id),
    navbarTabTable: () => instruments.use<ButtonInstrument>(navbarTableTab.id),
    navbarTabCounter: () => instruments.use<ButtonInstrument>(navbarCounterTab.id),
    navbarDocumentsTab: () => instruments.use<ButtonInstrument>(navbarDocumentsTab.id),
    instrumentIds: () => configs.map((config) => config.id)
  };
}

export type NavbarTower = ReturnType<typeof setupNavbarTower>;
