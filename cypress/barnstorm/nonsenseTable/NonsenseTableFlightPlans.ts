/// <reference types="cypress" />

import { FlightLeg } from '@kryter/barnstorm/lib/FlightLeg';
import { FlightPlan } from '@kryter/barnstorm/lib/FlightPlan';
import { AppInstruments } from '../useInstruments';
import {NonsenseTableTower, DATA_COLUMN_1, DATA_COLUMN_2, DATA_COLUMN_3} from './NonsenseTableTower';

const expectedSmallData = {
  rows: [
    {
      [DATA_COLUMN_1]: {
        textContent: '1'
      },
      [DATA_COLUMN_2]: {
        textContent: '2'
      },
      [DATA_COLUMN_3]: {
        textContent: '3'
      }
    },
    {
      [DATA_COLUMN_1]: {
        textContent: '2'
      },
      [DATA_COLUMN_2]: {
        textContent: '3'
      },
      [DATA_COLUMN_3]: {
        textContent: '4'
      }
    },
    {
      [DATA_COLUMN_1]: {
        textContent: '3'
      },
      [DATA_COLUMN_2]: {
        textContent: '4'
      },
      [DATA_COLUMN_3]: {
        textContent: '1'
      }
    }
  ]
};

const expectedBigData = {
  rows: [
    {
      [DATA_COLUMN_1]: {
        textContent: '5'
      },
      [DATA_COLUMN_2]: {
        textContent: '6'
      },
      [DATA_COLUMN_3]: {
        textContent: '7'
      }
    },
    {
      [DATA_COLUMN_1]: {
        textContent: '6'
      },
      [DATA_COLUMN_2]: {
        textContent: '7'
      },
      [DATA_COLUMN_3]: {
        textContent: '8'
      }
    },
    {
      [DATA_COLUMN_1]: {
        textContent: '7'
      },
      [DATA_COLUMN_2]: {
        textContent: '8'
      },
      [DATA_COLUMN_3]: {
        textContent: '9'
      }
    }
  ]
};

export interface SwapTableDataOptions {
  nonsenseTableTower: NonsenseTableTower;
}

export function swapTableDataBackAndForth({nonsenseTableTower}: SwapTableDataOptions): FlightPlan {
  return {
    legs: [
      swapToBigTableData({nonsenseTableTower}),
      swapToSmallTableData({nonsenseTableTower}),
      swapToBigTableData({nonsenseTableTower}),
      swapToSmallTableData({nonsenseTableTower})
    ]
  };
}

export function swapToBigTableData({nonsenseTableTower}: SwapTableDataOptions): FlightLeg {
  return {
    doTestAction: (instruments: AppInstruments) => {
      nonsenseTableTower.swapDataButton().click();
    },
    updateExpectations: (instruments: AppInstruments) => {
      nonsenseTableTower.nonsenseTable().updateState(expectedBigData);
    }
  };
}

export function swapToSmallTableData({nonsenseTableTower}: SwapTableDataOptions): FlightLeg {
  return {
    doTestAction: (instruments: AppInstruments) => {
      nonsenseTableTower.swapDataButton().click();
    },
    updateExpectations: (instruments: AppInstruments) => {
      nonsenseTableTower.nonsenseTable().updateState(expectedSmallData);
    }
  };
}