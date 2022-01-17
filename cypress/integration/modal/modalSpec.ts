/// <reference types="cypress" />

import {FlyFunction, useAirplane} from '@kryter/barnstorm/lib/useAirplane';
import { CounterTower, setupCounterTower } from '../../barnstorm/counter/CounterTower';
import { useInstruments } from '../../barnstorm/useInstruments';
import { NavbarTower, setupNavbarTower } from '../../barnstorm/navbar/NavbarTower';
import { useUrls } from '../../barnstorm/useUrls';
import {openAndCloseModalDialog} from '../../barnstorm/modal/modalFlightPlans';
import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';

describe('Modal', () => {
  let instruments: InstrumentSet;
  let fly: FlyFunction;
  let counterTower: CounterTower;
  let navbarTower: NavbarTower;

  it('Setup instruments and pages, and visit the counter url', () => {
    instruments = useInstruments();
    fly = useAirplane(instruments);
    counterTower = setupCounterTower(instruments);
    navbarTower = setupNavbarTower(instruments);

    instruments.url().visit(useUrls().counterUrl);
  });

  it('Verify initial state', () => {
    instruments.verifyState();
  });

  it('Open and close the modal dialog', () => {
    fly(openAndCloseModalDialog({
      navbarTower
    }));
  });
});
