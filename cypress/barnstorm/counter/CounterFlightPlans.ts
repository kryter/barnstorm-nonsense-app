/// <reference types="cypress" />

import { FlightLeg } from '@kryter/barnstorm/lib/FlightLeg';
import { FlightPlan } from '@kryter/barnstorm/lib/FlightPlan';
import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import { CounterTower } from './CounterTower';

export interface ClickToIncrementTheCountOptions {
  counterTower: CounterTower;
  expectedCount: number;
}

export function clickToIncrementTheCount({counterTower, expectedCount}: ClickToIncrementTheCountOptions): FlightLeg {
  return {
    doTestAction: (instruments: InstrumentSet) => {
      counterTower.counterButton().click();
    },
    updateExpectations: (instruments: InstrumentSet) => {
      counterTower.counterButton().updateState({
        textContent: `count is: ${expectedCount}`
      });
    }
  };
}

export interface FillOutFormOptions {
  counterTower: CounterTower;
  title: string;
  description: string;
}

export function fillOutForm({counterTower, title, description}: FillOutFormOptions): FlightPlan {
  return {
    legs: [
      {
        doTestAction: (instruments: InstrumentSet) => {
          counterTower.titleTextBox().enterText(title);
        },
        updateExpectations: (instruments: InstrumentSet) => {
          counterTower.titleTextBox().updateState({
            textContent: title
          });
        }
      },
      {
        doTestAction: (instruments: InstrumentSet) => {
          counterTower.descriptionTextArea().enterText(description);
        },
        updateExpectations: (instruments: InstrumentSet) => {
          counterTower.descriptionTextArea().updateState({
            textContent: description
          });
        }
      },
      {
        doTestAction: (instruments: InstrumentSet) => {
          counterTower.aCheckbox().check();
        },
        updateExpectations: (instruments: InstrumentSet) => {
          // The checkbox automatically updates its expected state,
          // so no updates are needed here.
        }
      }
    ]
  };
}