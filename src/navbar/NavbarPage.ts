import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import { ButtonInstrument, UIElementInstrument } from '@kryter/barnstorm/lib/instruments';
import { INSTRUMENT_TYPES } from '@kryter/barnstorm/lib/INSTRUMENT_TYPES';

const NAVBAR_TABS_TABLE = 'NAVBAR_TABS_TABLE';
const NAVBAR_TABS_COUNTER = 'NAVBAR_TABS_COUNTER';
const NAVBAR_HEADING = 'NAVBAR_HEADING';

const navbarTabTable = {
  id: NAVBAR_TABS_TABLE,
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: '.navbar-tab-button.navbar-tab-table',
  initialState: {
    textContent: 'Table'
  }
};

const navbarTabCounter = {
  id: NAVBAR_TABS_COUNTER,
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: '.navbar-tab-button.navbar-tab-counter',
  initialState: {
    textContent: 'Counter'
  }
};

const navbarHeading = {
  id: NAVBAR_HEADING,
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

export function setupNavbarPage(instrumentSet: InstrumentSet) {
  configs.forEach(config => instrumentSet.setup(config));

  return {
    navbarTabTable: () => instrumentSet.use<ButtonInstrument>(NAVBAR_TABS_TABLE),
    navbarTabCounter: () => instrumentSet.use<ButtonInstrument>(NAVBAR_TABS_COUNTER),
    navbarHeading: () => instrumentSet.use<UIElementInstrument>(NAVBAR_HEADING),
    teardownNavbarPage: () => instrumentSet.teardown(configs.map(config => config.id))
  };
}

export type NavbarPage = ReturnType<typeof setupNavbarPage>;
