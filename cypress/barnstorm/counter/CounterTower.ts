import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import { ButtonInstrument } from '@kryter/barnstorm/lib/instruments';
import { INSTRUMENT_TYPES } from '@kryter/barnstorm/lib/INSTRUMENT_TYPES';
import { CheckboxInstrument } from '@kryter/barnstorm/lib/instruments';
import { TextAreaInstrument } from '@kryter/barnstorm/lib/instruments';
import { TextBoxInstrument } from '@kryter/barnstorm/lib/instruments';

const titleTextBox = {
  id: 'titleTextBox',
  instrumentType: INSTRUMENT_TYPES.TEXT_BOX,
  selector: {
    css: '.title-text-box'
  },
  initialState: {
    textContent: ''
  }
};

const descriptionTextArea = {
  id: 'descriptionTextArea',
  instrumentType: INSTRUMENT_TYPES.TEXT_AREA,
  selector: {
    css: '.description-text-area'
  },
  initialState: {
    textContent: ''
  }
};

const aCheckbox = {
  id: 'aCheckbox',
  instrumentType: INSTRUMENT_TYPES.CHECKBOX,
  selector: {
    css: '.confirm-checkbox'
  },
  initialState: {
    isChecked: false
  }
};

const counterButton = {
  id: 'counterButton',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: {
    css: '.counter-button'
  },
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

export function setupCounterTower(instruments: InstrumentSet) {
  instruments.createInstruments(configs);

  return {
    titleTextBox: () => instruments.use<TextBoxInstrument>(titleTextBox.id),
    descriptionTextArea: () => instruments.use<TextAreaInstrument>(descriptionTextArea.id),
    aCheckbox: () => instruments.use<CheckboxInstrument>(aCheckbox.id),
    counterButton: () => instruments.use<ButtonInstrument>(counterButton.id),
    instrumentIds: () => configs.map((config) => config.id)
  };
}

export type CounterTower = ReturnType<typeof setupCounterTower>;
