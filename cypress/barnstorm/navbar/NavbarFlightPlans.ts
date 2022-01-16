import { FlightLeg } from '@kryter/barnstorm/lib/FlightLeg';
import { NavbarTower } from './NavbarTower';
import { CounterTower } from '../counter/CounterTower';
import { AppInstruments } from '../useInstruments';
import { useUrls } from '../useUrls';
import { ModalDialogTower } from '../modal/ModalTower';

export interface ClickNavbarTabOptions {
  navbarTower: NavbarTower;
  counterTower: CounterTower;
}

export function clickNavbarTabCounter({navbarTower, counterTower}: ClickNavbarTabOptions): FlightLeg {
  return {
    doTestAction: (instruments: AppInstruments) => {
      navbarTower.navbarTabCounter().click();
    },
    updateExpectations: (instruments: AppInstruments) => {
      instruments.setIsPresent(counterTower.instrumentIds(), true);
      instruments.url().updateState({
        currentUrl: useUrls().counterUrl
      });
    }
  };
}

export function clickNavbarTabTable({navbarTower, counterTower}: ClickNavbarTabOptions): FlightLeg {
  return {
    doTestAction: (instruments: AppInstruments) => {
      navbarTower.navbarTabTable().click();
    },
    updateExpectations: (instruments: AppInstruments) => {
      instruments.setIsPresent(counterTower.instrumentIds(), false);
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
    doTestAction: (instruments: AppInstruments) => {
      navbarTower.openModalButton().click();
    },
    updateExpectations: (instruments: AppInstruments) => {
      instruments.setIsPresent(modalDialogTower.instrumentIds(), true);
    }
  };
}

export function closeModalDialog({navbarTower, modalDialogTower}: ModalDialogOptions): FlightLeg {
  return {
    doTestAction: (instruments: AppInstruments) => {
      modalDialogTower.closeButton().click();
    },
    updateExpectations: (instruments: AppInstruments) => {
      instruments.setIsPresent(modalDialogTower.instrumentIds(), false);
    }
  };
}
