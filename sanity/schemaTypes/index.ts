import type { SchemaTypeDefinition } from "sanity";
import { atAGlance } from "./atAGlance";
import { teamMember } from "./teamMember";
import { pmsDisclosure } from "./pmsDisclosure";

export const schemaTypes: SchemaTypeDefinition[] = [
  atAGlance,
  teamMember,
  pmsDisclosure,
];
