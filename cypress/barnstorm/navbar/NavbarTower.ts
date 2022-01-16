import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import { ButtonInstrument, UIElementInstrument } from '@kryter/barnstorm/lib/instruments';
import { INSTRUMENT_TYPES } from '@kryter/barnstorm/lib/INSTRUMENT_TYPES';

const navbarTabTable = {
  id: 'navbarTabTable',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: '.navbar-tab-button.navbar-tab-table',
  initialState: {
    textContent: 'Table'
  }
};

const navbarTabCounter = {
  id: 'navbarTabCounter',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: '.navbar-tab-button.navbar-tab-counter',
  initialState: {
    textContent: 'Counter'
  }
};

const navbarHeading = {
  id: 'navbarHeading',
  instrumentType: INSTRUMENT_TYPES.UI_ELEMENT,
  selector: '.app-header h1',
  initialState: {
    textContent: 'Barnstorm Nonsense'
  }
};

const configs = [
  navbarTabTable,
  navbarTabCounter,
  navbarHeading
];

export function setupNavbarTower(instruments: InstrumentSet) {
  instruments.createInstruments(configs);

  return {
    navbarTabTable: () => instruments.use<ButtonInstrument>(navbarTabTable.id),
    navbarTabCounter: () => instruments.use<ButtonInstrument>(navbarTabCounter.id),
    navbarHeading: () => instruments.use<UIElementInstrument>(navbarHeading.id),
    instrumentIds: () => configs.map((config) => config.id)
  };
}

export type NavbarTower = ReturnType<typeof setupNavbarTower>;
