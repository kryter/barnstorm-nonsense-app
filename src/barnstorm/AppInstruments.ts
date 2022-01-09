import { InstrumentSet } from "@kryter/barnstorm/lib/InstrumentSet";
import { createMechanicGroup } from "@kryter/barnstorm-cypress/lib/createMechanicGroup";

const mechanicGroup = createMechanicGroup();

export function buildAppInstruments(): InstrumentSet {
  return new InstrumentSet(mechanicGroup);
}

export type AppInstruments = ReturnType<typeof buildAppInstruments>;
