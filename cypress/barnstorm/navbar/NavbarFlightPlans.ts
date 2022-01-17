import { FlightLeg } from '@kryter/barnstorm/lib/FlightLeg';
import { NavbarTower } from './NavbarTower';
import { CounterTower } from '../counter/CounterTower';
import { useUrls } from '../useUrls';
import { ModalDialogTower } from '../modal/ModalTower';
import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';

export interface ClickNavbarTabOptions {
  navbarTower: NavbarTower;
  counterTower: CounterTower;
}

export function clickNavbarTabCounter({navbarTower, counterTower}: ClickNavbarTabOptions): FlightLeg {
  return {
    doTestAction: (instruments: InstrumentSet) => {
      navbarTower.navbarTabCounter().click();
    },
    updateExpectations: (instruments: InstrumentSet) => {
      instruments.setArePresent(counterTower.instrumentIds(), true);
      instruments.url().updateState({
        currentUrl: useUrls().counterUrl
      });
    }
  };
}

export function clickNavbarTabTable({navbarTower, counterTower}: ClickNavbarTabOptions): FlightLeg {
  return {
    doTestAction: (instruments: InstrumentSet) => {
      navbarTower.navbarTabTable().click();
    },
    updateExpectations: (instruments: InstrumentSet) => {
      instruments.setArePresent(counterTower.instrumentIds(), false);
      instruments.url().updateState({
        currentUrl: useUrls().entryUrl
      });
    }
  };
}

export interface ModalDialogOptions {
  navbarTower: NavbarTower;
  modalDialogTower: ModalDialogTower;
}

export function openModalDialog({navbarTower, modalDialogTower}: ModalDialogOptions): FlightLeg {
  return {
    doTestAction: (instruments: InstrumentSet) => {
      navbarTower.openModalButton().click();
    },
    updateExpectations: (instruments: InstrumentSet) => {
      instruments.setArePresent(modalDialogTower.instrumentIds(), true);
    }
  };
}

export function closeModalDialog({navbarTower, modalDialogTower}: ModalDialogOptions): FlightLeg {
  return {
    doTestAction: (instruments: InstrumentSet) => {
      modalDialogTower.closeButton().click();
    },
    updateExpectations: (instruments: InstrumentSet) => {
      instruments.setArePresent(modalDialogTower.instrumentIds(), false);
    }
  };
}
