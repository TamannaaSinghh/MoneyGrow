import type { SchemaTypeDefinition } from "sanity";
import { atAGlance } from "./atAGlance";
import { teamMember } from "./teamMember";

export const schemaTypes: SchemaTypeDefinition[] = [atAGlance, teamMember];
