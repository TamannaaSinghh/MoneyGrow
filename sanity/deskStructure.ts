import type { StructureResolver } from "sanity/structure";

/**
 * Single editable "At a glance" document (singleton) — there is only ever
 * one, so we point straight at a fixed document id.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Hero — Info card")
        .id("atAGlance")
        .child(S.document().schemaType("atAGlance").documentId("atAGlance")),
      S.listItem()
        .title("Marketing Presentation")
        .id("marketingPresentation")
        .child(
          S.document()
            .schemaType("marketingPresentation")
            .documentId("marketingPresentation")
        ),
      S.divider(),
      S.documentTypeListItem("newsletter")
        .title("Newsletters")
        .child(
          S.documentTypeList("newsletter")
            .title("Newsletters")
            .defaultOrdering([{ field: "date", direction: "desc" }])
        ),
      S.documentTypeListItem("teamMember").title("Team members"),
      S.documentTypeListItem("pmsDisclosure").title("PMS Regulatory Disclosures"),
      S.documentTypeListItem("aifDisclosure").title("AIF Regulatory Disclosures"),
    ]);
