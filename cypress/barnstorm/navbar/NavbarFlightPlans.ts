import { FlightLeg } from '@kryter/barnstorm/lib/FlightLeg';
import { NavbarTower } from './NavbarTower';
import { CounterTower } from '../counter/CounterTower';
import { AppInstruments } from '../useInstruments';
import { useUrls } from '../useUrls';

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
