import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import { ButtonInstrument, UIElementInstrument } from '@kryter/barnstorm/lib/instruments';
import { INSTRUMENT_TYPES } from '@kryter/barnstorm/lib/INSTRUMENT_TYPES';
import { InstrumentOptions } from '@kryter/barnstorm/lib/instruments/instrument/InstrumentOptions';

export const MODAL_BACKDROP_COLOR = 'rgba(0, 0, 0, 0.5)';
export const DIALOG_BACKGROUND_COLOR = 'rgb(255, 255, 255)';
export const DIALOG_COLOR = 'rgb(0, 0, 0)';

const dialogBackdrop = {
  id: 'dialogBackdrop',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: '.modal-backdrop',
  initialState: {
    css: {
      'background-color': MODAL_BACKDROP_COLOR
    }
  }
};

const dialog = {
  id: 'dialog',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: '.modal-dialog',
  initialState: {
    css: {
      'background-color': DIALOG_BACKGROUND_COLOR
    }
  }
};

const dialogTitle = {
  id: 'dialogTitle',
  instrumentType: INSTRUMENT_TYPES.UI_ELEMENT,
  selector: '.modal-title',
  initialState: {
    textContent: 'Here is a Modal Dialog',
    css: {
      'color': DIALOG_COLOR
    }
  }
};

const closeButton = {
  id: 'closeButton',
  instrumentType: INSTRUMENT_TYPES.BUTTON,
  selector: '.modal-close-button',
  initialState: {
    textContent: ''
  }
};

const modalContent = {
  id: 'modalContent',
  instrumentType: INSTRUMENT_TYPES.UI_ELEMENT,
  selector: '.modal-content',
  initialState: {
    textContent: 'Here is the modal content.',
    css: {
      'color': DIALOG_COLOR
    }
  }
};

const configs: InstrumentOptions[] = [
  dialogBackdrop,
  dialog,
  dialogTitle,
  closeButton,
  modalContent
];

export function useModalDialogTower(instruments: InstrumentSet) {
  instruments.createInstruments(configs);

  return {
    dialogBackdrop: () => instruments.use<ButtonInstrument>(dialogBackdrop.id),
    dialog: () => instruments.use<ButtonInstrument>(dialog.id),
    dialogTitle: () => instruments.use<UIElementInstrument>(dialogTitle.id),
    closeButton: () => instruments.use<ButtonInstrument>(closeButton.id),
    modalContent: () => instruments.use<UIElementInstrument>(modalContent.id),
    instrumentIds: () => configs.map((config) => config.id)
  };
}

export type ModalDialogTower = ReturnType<typeof useModalDialogTower>;
