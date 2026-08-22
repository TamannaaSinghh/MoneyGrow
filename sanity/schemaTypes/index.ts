import type { SchemaTypeDefinition } from "sanity";
import { atAGlance } from "./atAGlance";
import { teamMember } from "./teamMember";
import { pmsDisclosure } from "./pmsDisclosure";
import { aifDisclosure } from "./aifDisclosure";
import { marketingPresentation } from "./marketingPresentation";
import { newsletter } from "./newsletter";

export const schemaTypes: SchemaTypeDefinition[] = [
  atAGlance,
  teamMember,
  pmsDisclosure,
  aifDisclosure,
  marketingPresentation,
  newsletter,
];
