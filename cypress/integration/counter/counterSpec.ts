/// <reference types="cypress" />

import { fly } from '@kryter/barnstorm/lib/fly';
import { buildAppInstruments, AppInstruments } from '../../../src/barnstorm/AppInstruments';
import { ENTRY_URL } from '../../../src/barnstorm/AppUrls';
import { CounterPage, setupCounterPage } from '../../../src/counter/CounterPage';
import { clickToIncrementTheCount } from '../../../src/counter/CounterFlightPlans';

describe('Counter', () => {
  let instruments: AppInstruments;
  let counterPage: CounterPage;

  it('Setup Instruments and Pages To Visit the Entry Url', () => {
    instruments = buildAppInstruments();
    counterPage = setupCounterPage(instruments);

    instruments.url().visit(ENTRY_URL);
  });

  it('Click the counter button to increment the count displayed on the button', () => {
    fly(instruments, clickToIncrementTheCount({
      counterPage,
      expectedCount: 1
    }));

    fly(instruments, clickToIncrementTheCount({
      counterPage,
      expectedCount: 2
    }));
  });
});
