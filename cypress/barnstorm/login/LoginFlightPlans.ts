import { FlightPlan } from '@kryter/barnstorm/lib/FlightPlan';
import { InstrumentSet } from '@kryter/barnstorm/lib/InstrumentSet';
import {LoginTower, useLoginTower} from './LoginTower';
import {useUrls} from '../useUrls';

export interface LoginOptions {
  email: string;
  password: string;
}

export function logIn({
  email,
  password
}: LoginOptions): FlightPlan {
  let loginTower: LoginTower;

  return {
    legs: [
      {
        doTestAction: (instruments: InstrumentSet) => {
          instruments.url().visit(useUrls().loginUrl);
        },
        updateExpectations: (instruments: InstrumentSet) => {
          loginTower = useLoginTower(instruments);
        }
      },
      {
        doTestAction: (instruments: InstrumentSet) => {
          loginTower.emailTextbox().enterText(email);
        },
        updateExpectations: (instruments: InstrumentSet) => {
          loginTower.emailTextbox().updateState({
            inputText: email
          });
        }
      },
      {
        doTestAction: (instruments: InstrumentSet) => {
          loginTower.passwordTextbox().enterText(password);
        },
        updateExpectations: (instruments: InstrumentSet) => {
          loginTower.passwordTextbox().updateState({
            inputText: password
          });
        }
      },
      {
        doTestAction: (instruments: InstrumentSet) => {
          loginTower.loginButton().click();
        },
        updateExpectations: (instruments: InstrumentSet) => {
          instruments.setIsPresent(loginTower.instrumentIds(), false);
          instruments.url().updateState({
            currentUrl: useUrls().entryUrl
          });
        }
      },
      {
        doTestAction: (instruments: InstrumentSet) => {
          instruments.destroyInstruments(loginTower.instrumentIds());
        },
        updateExpectations: (instruments: InstrumentSet) => {
          // Remaining state should stay the same.
        }
      }
    ]
  };
}
