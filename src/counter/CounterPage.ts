import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import { ButtonInstrument } from '@kryter/barnstorm/lib/instruments';
import { INSTRUMENT_TYPES } from '@kryter/barnstorm/lib/INSTRUMENT_TYPES';
import { CheckboxInstrument } from '@kryter/barnstorm/lib/instruments';
import { TextAreaInstrument } from '@kryter/barnstorm/lib/instruments';
import { TextBoxInstrument } from '@kryter/barnstorm/lib/instruments';

const TITLE_TEXT_BOX = 'TITLE_TEXT_BOX';
const DESCRIPTION_TEXT_AREA = 'DESCRIPTION_TEXT_AREA';
const A_CHECKBOX = 'A_CHECKBOX';
const COUNT_BUTTON = 'COUNT_BUTTON';

const titleTextBox = {
  id: TITLE_TEXT_BOX,
  instrumentType: INSTRUMENT_TYPES.TEXT_BOX,
  selector: '.title-text-box',
  initialState: {
    textContent: ''
  }
};

const descriptionTextArea = {
  id: DESCRIPTION_TEXT_AREA,
  instrumentType: INSTRUMENT_TYPES.TEXT_AREA,
  selector: '.description-text-area',
  initialState: {
    textContent: ''
  }
};

const aCheckbox = {
  id: A_CHECKBOX,
  instrumentType: INSTRUMENT_TYPES.CHECKBOX,
  selector: '.confirm-checkbox',
  initialState: {
    isChecked: false
  }
};


const counterButton = {
  id: COUNT_BUTTON,
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: '.counter-button',
  initialState: {
    textContent: 'count is: 0'
  }
};


const configs = [
  titleTextBox,
  descriptionTextArea,
  aCheckbox,
  counterButton
];

export function setupCounterPage(instrumentSet: InstrumentSet) {
  configs.forEach(config => instrumentSet.setup(config));

  return {
    titleTextBox: () => instrumentSet.use<TextBoxInstrument>(TITLE_TEXT_BOX),
    descriptionTextArea: () => instrumentSet.use<TextAreaInstrument>(DESCRIPTION_TEXT_AREA),
    aCheckbox: () => instrumentSet.use<CheckboxInstrument>(A_CHECKBOX),
    countButton: () => instrumentSet.use<ButtonInstrument>(COUNT_BUTTON),
    setIsPresent: (iPresent: boolean) => instrumentSet.setIsPresent(configs.map(config => config.id), iPresent),
    teardownCounterPage: () => instrumentSet.teardown(configs.map(config => config.id))
  };
}

export type CounterPage = ReturnType<typeof setupCounterPage>;
