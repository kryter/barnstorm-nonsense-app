/// <reference types="cypress" />

import { FlightPlan } from '@kryter/barnstorm/lib/FlightPlan';
import { AppInstruments } from '../barnstorm/AppInstruments';
import { NavbarPage } from './NavbarPage';
import { CounterPage } from '../counter/CounterPage';
import { COUNTER_URL, ENTRY_URL } from '../barnstorm/AppUrls';

export interface ClickNavbarTabOptions {
  navbarPage: NavbarPage;
  counterPage: CounterPage;
}

export function clickNavbarTabCounter({navbarPage, counterPage}: ClickNavbarTabOptions): FlightPlan {
  return {
    legs: [
      {
        doTestAction: (instruments: AppInstruments) => {
          navbarPage.navbarTabCounter().click();
        },
        updateExpectations: (instruments: AppInstruments) => {
          counterPage.setIsPresent(true);
          instruments.url().updateState({
            currentUrl: COUNTER_URL
          });
        }
      }
    ]
  };
}

export function clickNavbarTabTable({navbarPage, counterPage}: ClickNavbarTabOptions): FlightPlan {
  return {
    legs: [
      {
        doTestAction: (instruments: AppInstruments) => {
          navbarPage.navbarTabTable().click();
        },
        updateExpectations: (instruments: AppInstruments) => {
          counterPage.setIsPresent(false);
          instruments.url().updateState({
            currentUrl: ENTRY_URL
          });
        }
      }
    ]
  };
}
