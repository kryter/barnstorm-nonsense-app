import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import { ButtonInstrument, TextBoxInstrument, UIElementInstrument } from '@kryter/barnstorm/lib/instruments';
import { INSTRUMENT_TYPES } from '@kryter/barnstorm/lib/INSTRUMENT_TYPES';
import { InstrumentOptions } from '@kryter/barnstorm/lib/instruments/instrument/InstrumentOptions';

const emailLabel = {
  id: 'emailLabel',
  instrumentType: INSTRUMENT_TYPES.UI_ELEMENT,
  selector: '.email-label',
  initialState: {
    textContent: 'Email'
  }
};

const emailTextbox = {
  id: 'emailTextbox',
  instrumentType: INSTRUMENT_TYPES.TEXT_BOX,
  selector: '.email-textbox',
  initialState: {
    inputText: ''
  }
};

const passwordLabel = {
  id: 'passwordLabel',
  instrumentType: INSTRUMENT_TYPES.UI_ELEMENT,
  selector: '.password-label',
  initialState: {
    textContent: 'Password'
  }
};

const passwordTextbox = {
  id: 'passwordTextbox',
  instrumentType: INSTRUMENT_TYPES.TEXT_BOX,
  selector: '.password-textbox',
  initialState: {
    inputText: ''
  }
};

const loginButton = {
  id: 'loginButton',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: '.log-in-button',
  initialState: {
    textContent: 'Log in'
  }
};

const configs: InstrumentOptions[] = [
  emailLabel,
  emailTextbox,
  passwordLabel,
  passwordTextbox,
  loginButton
];

export function useLoginTower(instruments: InstrumentSet) {
  instruments.createInstruments(configs);

  return {
    emailLabel: () => instruments.use<UIElementInstrument>(emailLabel.id),
    emailTextbox: () => instruments.use<TextBoxInstrument>(emailTextbox.id),
    passwordLabel: () => instruments.use<UIElementInstrument>(passwordLabel.id),
    passwordTextbox: () => instruments.use<TextBoxInstrument>(passwordTextbox.id),
    loginButton: () => instruments.use<ButtonInstrument>(loginButton.id),
    instrumentIds: () => configs.map((config) => config.id)
  };
}

export type LoginTower = ReturnType<typeof useLoginTower>;
