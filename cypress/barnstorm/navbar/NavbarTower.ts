import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import { ButtonInstrument, UIElementInstrument } from '@kryter/barnstorm/lib/instruments';
import { INSTRUMENT_TYPES } from '@kryter/barnstorm/lib/INSTRUMENT_TYPES';

const navbarHeading = {
  id: 'navbarHeading',
  instrumentType: INSTRUMENT_TYPES.UI_ELEMENT,
  selector: '.app-title',
  initialState: {
    textContent: 'Barnstorm Nonsense'
  }
};

const openModalButton = {
  id: 'openModalButton',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: '.open-modal-button',
  initialState: {
    textContent: 'Open Modal'
  }
};

const navbarLoginTab = {
  id: 'navbarLoginTab',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: '.navbar-tab-button.navbar-tab-login',
  initialState: {
    textContent: 'Login'
  }
};

const navbarTableTab = {
  id: 'navbarTableTab',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: '.navbar-tab-button.navbar-tab-table',
  initialState: {
    textContent: 'Table'
  }
};

const navbarCounterTab = {
  id: 'navbarCounterTab',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: '.navbar-tab-button.navbar-tab-counter',
  initialState: {
    textContent: 'Counter'
  }
};

const configs = [
  navbarHeading,
  openModalButton,
  navbarTableTab,
  navbarCounterTab,
];

export function setupNavbarTower(instruments: InstrumentSet) {
  instruments.createInstruments(configs);

  return {
    navbarHeading: () => instruments.use<UIElementInstrument>(navbarHeading.id),
    openModalButton: () => instruments.use<ButtonInstrument>(openModalButton.id),
    navbarLoginTab: () => instruments.use<ButtonInstrument>(navbarLoginTab.id),
    navbarTabTable: () => instruments.use<ButtonInstrument>(navbarTableTab.id),
    navbarTabCounter: () => instruments.use<ButtonInstrument>(navbarCounterTab.id),
    instrumentIds: () => configs.map((config) => config.id)
  };
}

export type NavbarTower = ReturnType<typeof setupNavbarTower>;
