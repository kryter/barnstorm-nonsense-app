/// <reference types="cypress" />

import { FlightLeg } from '@kryter/barnstorm/lib/FlightLeg';
import { FlightPlan } from '@kryter/barnstorm/lib/FlightPlan';
import { AppInstruments } from '../useInstruments';
import { CounterTower } from './CounterTower';

export interface ClickToIncrementTheCountOptions {
  counterTower: CounterTower;
  expectedCount: number;
}

export function clickToIncrementTheCount({counterTower, expectedCount}: ClickToIncrementTheCountOptions): FlightLeg {
  return {
    doTestAction: (instruments: AppInstruments) => {
      counterTower.counterButton().click();
    },
    updateExpectations: (instruments: AppInstruments) => {
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
        doTestAction: (instruments: AppInstruments) => {
          counterTower.titleTextBox().enterText(title);
        },
        updateExpectations: (instruments: AppInstruments) => {
          counterTower.titleTextBox().updateState({
            inputText: title
          });
        }
      },
      {
        doTestAction: (instruments: AppInstruments) => {
          counterTower.descriptionTextArea().enterText(description);
        },
        updateExpectations: (instruments: AppInstruments) => {
          counterTower.descriptionTextArea().updateState({
            inputText: description
          });
        }
      },
      {
        doTestAction: (instruments: AppInstruments) => {
          counterTower.aCheckbox().check();
        },
        updateExpectations: (instruments: AppInstruments) => {
          // The checkbox automatically updates its expected state,
          // so no updates are needed here.
        }
      }
    ]
  };
}