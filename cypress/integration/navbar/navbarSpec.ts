/// <reference types="cypress" />

import { fly } from '@kryter/barnstorm/lib/fly';
import { buildAppInstruments, AppInstruments } from '../../../src/barnstorm/AppInstruments';
import {  COUNTER_URL } from '../../../src/barnstorm/AppUrls';
import { CounterPage, setupCounterPage } from '../../../src/counter/CounterPage';
import { NavbarPage, setupNavbarPage } from '../../../src/navbar/NavbarPage';
import { clickNavbarTabCounter, clickNavbarTabTable } from '../../../src/navbar/NavbarFlightPlans';

describe('Navbar', () => {
  let instruments: AppInstruments;
  let counterPage: CounterPage;
  let navbarPage: NavbarPage;

  it('Setup instruments and pages, and visit the counter url', () => {
    instruments = buildAppInstruments();
    counterPage = setupCounterPage(instruments);
    navbarPage = setupNavbarPage(instruments);

    instruments.url().visit(COUNTER_URL);
  });

  it('Click the table tab to switch to the table page', () => {
    fly(instruments, clickNavbarTabTable({
      counterPage,
      navbarPage
    }));
  });

  it('Click the counter tab to switch to the counter page', () => {
    fly(instruments, clickNavbarTabCounter({
      counterPage,
      navbarPage
    }));
  });

  it('Click the table tab to switch back to the table page', () => {
    fly(instruments, clickNavbarTabTable({
      counterPage,
      navbarPage
    }));
  });
});
