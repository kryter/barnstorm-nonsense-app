/// <reference types="cypress" />

import {FlyFunction, useAirplane} from '@kryter/barnstorm/lib/useAirplane';
import { CounterTower, setupCounterTower } from '../../barnstorm/counter/CounterTower';
import { AppInstruments, useInstruments } from '../../barnstorm/useInstruments';
import { NavbarTower, setupNavbarTower } from '../../barnstorm/navbar/NavbarTower';
import { useUrls } from '../../barnstorm/useUrls';
import { clickNavbarTabCounter, clickNavbarTabTable } from '../../barnstorm/navbar/NavbarFlightPlans';

describe('Navbar', () => {
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

  it('Click the table tab to switch to the table page', () => {
    fly(clickNavbarTabTable({
      counterTower,
      navbarTower
    }));
  });

  it('Click the counter tab to switch to the counter page', () => {
    fly(clickNavbarTabCounter({
      counterTower,
      navbarTower
    }));
  });

  it('Click the table tab to switch back to the table page', () => {
    fly(clickNavbarTabTable({
      counterTower,
      navbarTower
    }));
  });
});
