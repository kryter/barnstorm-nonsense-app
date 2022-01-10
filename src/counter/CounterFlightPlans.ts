/// <reference types="cypress" />

import { FlightPlan } from '@kryter/barnstorm/lib/FlightPlan';
import { AppInstruments } from '../barnstorm/AppInstruments';
import { CounterPage } from './CounterPage';

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

export interface FillOutFormOptions {
  counterPage: CounterPage;
  title: string;
  description: string;
}

export function fillOutForm({counterPage, title, description}: FillOutFormOptions): FlightPlan {
  return {
    legs: [
      {
        doTestAction: (instruments: AppInstruments) => {
          counterPage.titleTextBox().enterText(title);
        },
        updateExpectations: (instruments: AppInstruments) => {
          counterPage.titleTextBox().updateState({
            inputText: title
          });
        }
      },
      {
        doTestAction: (instruments: AppInstruments) => {
          counterPage.descriptionTextArea().enterText(description);
        },
        updateExpectations: (instruments: AppInstruments) => {
          counterPage.descriptionTextArea().updateState({
            inputText: description
          });
        }
      },
      {
        doTestAction: (instruments: AppInstruments) => {
          counterPage.aCheckbox().check();
        },
        updateExpectations: (instruments: AppInstruments) => {
          // The checkbox automatically updates its expected state,
          // so no updates are needed here.
        }
      }
    ]
  };
}