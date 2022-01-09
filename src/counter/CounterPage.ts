import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import { ButtonInstrument } from '@kryter/barnstorm/lib/instruments';
import { INSTRUMENT_TYPES } from '@kryter/barnstorm/lib/INSTRUMENT_TYPES';

const COUNT_BUTTON = 'COUNT_BUTTON';

const counterButton = {
  id: COUNT_BUTTON,
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: '.counter-button',
  initialState: {
    textContent: 'count is: 0'
  }
};

const configs = [
  counterButton
];

export function setupCounterPage(instrumentSet: InstrumentSet) {
  configs.forEach(config => instrumentSet.setup(config));

  return {
    countButton: () => instrumentSet.use<ButtonInstrument>(COUNT_BUTTON),
    teardownCounterPage: () => instrumentSet.teardown(configs.map(config => config.id))
  };
}

export type CounterPage = ReturnType<typeof setupCounterPage>;
