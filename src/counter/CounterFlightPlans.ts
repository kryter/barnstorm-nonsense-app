/// <reference types="cypress" />

import { FlightPlan } from '@kryter/barnstorm/lib/FlightPlan';
import { AppInstruments } from '../../../src/barnstorm/AppInstruments';
import { CounterPage } from '../../../src/counter/CounterPage';

export interface ClickToIncrementTheCountOptions {
  counterPage: CounterPage;
  expectedCount: number;
}

export function clickToIncrementTheCount({counterPage, expectedCount}: ClickToIncrementTheCountOptions): FlightPlan {
  return {
    legs: [
      {
        doTestAction: (instruments: AppInstruments) => {
          counterPage.countButton().click();
        },
        updateExpectations: (instruments: AppInstruments) => {
          counterPage.countButton().updateState({
            textContent: `count is: ${expectedCount}`
          });
        }
      }
    ]
  };
}