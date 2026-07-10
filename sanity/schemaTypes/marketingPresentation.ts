import { defineField, defineType } from "sanity";

export const marketingPresentation = defineType({
  name: "marketingPresentation",
  title: "Marketing Presentation",
  type: "document",
  fields: [
    defineField({
      name: "file",
      title: "File (PDF)",
      type: "file",
      description:
        "Upload the marketing presentation PDF to host it on the site. Leave empty if you link to an external URL instead.",
      options: { storeOriginalFilename: true, accept: ".pdf" },
      validation: (rule) =>
        rule.custom((file, context) => {
          const doc = context.document as { externalUrl?: string } | undefined;
          if (!file && !doc?.externalUrl) {
            return "Upload a PDF or add an external URL.";
          }
          return true;
        }),
    }),
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
      description:
        "Alternative to uploading a file — link to a PDF hosted elsewhere. Ignored if a file is uploaded.",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Marketing Presentation" }),
  },
});
