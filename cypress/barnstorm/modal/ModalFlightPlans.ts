import { FlightPlan } from '@kryter/barnstorm/lib/FlightPlan';
import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import { ModalDialogTower, useModalDialogTower } from './ModalTower';
import {NavbarTower} from '../navbar/NavbarTower';

export interface ModalOpenOptions {
  navbarTower: NavbarTower;
}

export function openAndCloseModalDialog({navbarTower}: ModalOpenOptions): FlightPlan {
  let modalDialogTower: ModalDialogTower;

  return {
    legs: [
      {
        doTestAction: (instruments: InstrumentSet) => {
          navbarTower.openModalButton().click();
        },
        updateExpectations: (instruments: InstrumentSet) => {
          modalDialogTower = useModalDialogTower(instruments);
        }
      },
      {
        doTestAction: (instruments: InstrumentSet) => {
          modalDialogTower.closeButton().click();
        },
        updateExpectations: (instruments: InstrumentSet) => {
          instruments.setArePresent(modalDialogTower.instrumentIds(), false);
        }
      },
      {
        doTestAction: (instruments: InstrumentSet) => {
          instruments.destroyInstruments(modalDialogTower.instrumentIds());
        },
        updateExpectations: (instruments: InstrumentSet) => {
          // Remaining state should stay the same.
        }
      },
    ]
  };
}
