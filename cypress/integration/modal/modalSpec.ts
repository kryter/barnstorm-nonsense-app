/// <reference types="cypress" />

import {FlyFunction, useAirplane} from '@kryter/barnstorm/lib/useAirplane';
import { CounterTower, setupCounterTower } from '../../barnstorm/counter/CounterTower';
import { AppInstruments, useInstruments } from '../../barnstorm/useInstruments';
import { NavbarTower, setupNavbarTower } from '../../barnstorm/navbar/NavbarTower';
import { useUrls } from '../../barnstorm/useUrls';
import {openAndCloseModalDialog} from '../../barnstorm/modal/modalFlightPlans';

describe('Modal', () => {
  let instruments: AppInstruments;
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

  it('Open and close the modal dialog', () => {
    fly(openAndCloseModalDialog({
      navbarTower
    }));
  });
});
