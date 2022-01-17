/// <reference types="cypress" />

import { useAirplane, FlyFunction } from '@kryter/barnstorm/lib/useAirplane';
import { useInstruments } from '../../barnstorm/useInstruments';
import { CounterTower, setupCounterTower } from '../../barnstorm/counter/CounterTower';
import { useUrls } from '../../barnstorm/useUrls';
import { clickToIncrementTheCount, fillOutForm } from '../../barnstorm/counter/CounterFlightPlans';
import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';

describe('Counter', () => {
  let instruments: InstrumentSet;
  let fly: FlyFunction;
  let counterTower: CounterTower;

  it('Setup instruments and pages, and visit the counter url', () => {
    instruments = useInstruments();
    fly = useAirplane(instruments);
    counterTower = setupCounterTower(instruments);

    instruments.url().visit(useUrls().counterUrl);
  });

  it('Verify initial state', () => {
    instruments.verifyState();
  });

  it('Fill out the form', () => {
    fly(fillOutForm({
      counterTower,
      title: 'Testing is fun',
      description: 'It is especially fun when using Cypress and Barnstorm!'
    }));
  });

  it('Click the counter button to increment the count displayed on the button', () => {
    fly(clickToIncrementTheCount({
      counterTower,
      expectedCount: 1
    }));
  });

  it('Click the counter button again to increment the count displayed on the button again', () => {
    fly(clickToIncrementTheCount({
      counterTower,
      expectedCount: 2
    }));
  });
});
