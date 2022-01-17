/// <reference types="cypress" />

import { useAirplane, FlyFunction } from '@kryter/barnstorm/lib/useAirplane';
import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import { useInstruments } from '../../barnstorm/useInstruments';
import { NonsenseTableTower, setupNonsenseTableTower } from '../../barnstorm/nonsenseTable/NonsenseTableTower';
import { useUrls } from '../../barnstorm/useUrls';
import { swapTableDataBackAndForth } from '../../barnstorm/nonsenseTable/NonsenseTableFlightPlans';

describe('NonsenseTable', () => {
  let instruments: InstrumentSet;
  let fly: FlyFunction;
  let nonsenseTableTower: NonsenseTableTower;

  it('Setup instruments and pages, and visit the entry url', () => {
    instruments = useInstruments();
    fly = useAirplane(instruments);
    nonsenseTableTower = setupNonsenseTableTower(instruments);

    instruments.url().visit(useUrls().entryUrl);
  });

  it('Verify initial state', () => {
    instruments.verifyState();
  });

  it('Swap table data by pressing the button', () => {
    fly(swapTableDataBackAndForth({
      nonsenseTableTower
    }));
  });
});
