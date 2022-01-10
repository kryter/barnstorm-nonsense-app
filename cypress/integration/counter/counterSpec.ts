/// <reference types="cypress" />

import { fly } from '@kryter/barnstorm/lib/fly';
import { buildAppInstruments, AppInstruments } from '../../../src/barnstorm/AppInstruments';
import { COUNTER_URL, ENTRY_URL } from '../../../src/barnstorm/AppUrls';
import { CounterPage, setupCounterPage } from '../../../src/counter/CounterPage';
import { clickToIncrementTheCount } from '../../../src/counter/CounterFlightPlans';

describe('Counter', () => {
  let instruments: AppInstruments;
  let counterPage: CounterPage;

  it('Setup instruments and pages, and visit the entry url', () => {
    instruments = buildAppInstruments();
    counterPage = setupCounterPage(instruments);

    instruments.url().visit(COUNTER_URL);
  });

  it('Click the counter button to increment the count displayed on the button', () => {
    fly(instruments, clickToIncrementTheCount({
      counterPage,
      expectedCount: 1
    }));
  });

  it('Click the counter button again to increment the count displayed on the button again', () => {
    fly(instruments, clickToIncrementTheCount({
      counterPage,
      expectedCount: 2
    }));
  });
});
