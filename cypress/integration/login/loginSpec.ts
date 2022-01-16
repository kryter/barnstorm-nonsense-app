import { useAirplane } from '@kryter/barnstorm/lib/useAirplane';
import { FlightPlan } from '@kryter/barnstorm/lib/FlightPlan';
import { useUrls } from '../../barnstorm/useUrls';
import { logIn } from '../../barnstorm/login/LoginFlightPlans';
import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import {useInstruments} from '../../barnstorm/useInstruments';

describe('LoginSpec', () => {
  let instruments: InstrumentSet;
  let fly: (flightPlan: FlightPlan) => void;

  before(() => {
    instruments = useInstruments();
    fly = useAirplane(instruments);
  });

  it('Visit default page', () => {
    instruments.url().visit(useUrls().entryUrl);
  });

  it('Verify initial state', () => {
    instruments.verifyState();
  });

  it('Login with user2', () => {
    fly(logIn({
      email: 'aTestUser@gmail.com',
      password: 'abc123'
    }));
  });
});
