import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import { ButtonInstrument, ListInstrument } from '@kryter/barnstorm/lib/instruments';
import { INSTRUMENT_TYPES } from '@kryter/barnstorm/lib/INSTRUMENT_TYPES';

// Export the column keys for a list for reference in expected data
// updates during tests.
export const DATA_COLUMN_1 = 'DATA_COLUMN_1';
export const DATA_COLUMN_2 = 'DATA_COLUMN_2';
export const DATA_COLUMN_3 = 'DATA_COLUMN_3';

const nonsenseTable = {
  id: 'nonsenseTable',
  instrumentType: INSTRUMENT_TYPES.LIST,
  selector: '.nonsense-table',
  relativeItemSelector: 'tr.data-row',
  columns: [
    {
      id: DATA_COLUMN_1,
      instrumentType: INSTRUMENT_TYPES.UI_ELEMENT,
      selector: 'td.data-column-1'
    },
    {
      id: DATA_COLUMN_2,
      instrumentType: INSTRUMENT_TYPES.UI_ELEMENT,
      selector: 'td.data-column-2'
    },
    {
      id: DATA_COLUMN_3,
      instrumentType: INSTRUMENT_TYPES.UI_ELEMENT,
      selector: 'td.data-column-3'
    }
  ],
  initialState: {
    rows: [
      {
        [DATA_COLUMN_1]: {
          textContent: '1'
        },
        [DATA_COLUMN_2]: {
          textContent: '2'
        },
        [DATA_COLUMN_3]: {
          textContent: '3'
        }
      },
      {
        [DATA_COLUMN_1]: {
          textContent: '2'
        },
        [DATA_COLUMN_2]: {
          textContent: '3'
        },
        [DATA_COLUMN_3]: {
          textContent: '4'
        }
      },
      {
        [DATA_COLUMN_1]: {
          textContent: '3'
        },
        [DATA_COLUMN_2]: {
          textContent: '4'
        },
        [DATA_COLUMN_3]: {
          textContent: '1'
        }
      }
    ]
  }
};

const swapDataButton = {
  id: 'swapDataButton',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: '.swap-data-button',
  initialState: {
    textContent: 'Swap data set'
  }
};

const configs = [
  nonsenseTable,
  swapDataButton
];

export function setupNonsenseTableTower(instruments: InstrumentSet) {
  instruments.createInstruments(configs);

  return {
    nonsenseTable: () => instruments.use<ListInstrument>(nonsenseTable.id),
    swapDataButton: () => instruments.use<ButtonInstrument>(swapDataButton.id),
    instrumentIds: () => configs.map((config) => config.id)
  };
}

export type NonsenseTableTower = ReturnType<typeof setupNonsenseTableTower>;
