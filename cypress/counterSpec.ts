/// <reference types="cypress" />

import { fly } from '@kryter/barnstorm/lib/fly';
import { buildAppInstruments, AppInstruments } from '../../src/barnstorm/AppInstruments';
import { ENTRY_URL } from '../../src/barnstorm/AppUrls';
import { CounterPage, setupCounterPage } from '../../src/counter/CounterPage';
import { clickToIncrementTheCount } from '../../src/counter/CounterFlightPlans';

describe('Counter', () => {
  let instruments: AppInstruments;
  let counterPage: CounterPage;

  it(() => {
    instruments = buildAppInstruments();
    counterPage = setupCounterPage(instruments);

    instruments.url().visit(ENTRY_URL);
  });

    fly(instruments, clickToIncrementTheCount({
      counterPage
    }));
});
