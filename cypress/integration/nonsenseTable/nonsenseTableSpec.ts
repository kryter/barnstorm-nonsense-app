/// <reference types="cypress" />

import { useAirplane, FlyFunction } from '@kryter/barnstorm/lib/useAirplane';
import { AppInstruments, useInstruments } from '../../barnstorm/useInstruments';
import { NonsenseTableTower, setupNonsenseTableTower } from '../../barnstorm/nonsenseTable/NonsenseTableTower';
import { useUrls } from '../../barnstorm/useUrls';
import { swapTableDataBackAndForth } from '../../barnstorm/nonsenseTable/NonsenseTableFlightPlans';

describe('NonsenseTable', () => {
  let instruments: AppInstruments;
  let fly: FlyFunction;
  let nonsenseTableTower: NonsenseTableTower;

  it('Setup instruments and pages, and visit the nonsenseTable url', () => {
    instruments = useInstruments();
    fly = useAirplane(instruments);
    nonsenseTableTower = setupNonsenseTableTower(instruments);

    instruments.url().visit(useUrls().entryUrl);
  });

  it('Fill out the form', () => {
    fly(swapTableDataBackAndForth({
      nonsenseTableTower
    }));
  });
});
