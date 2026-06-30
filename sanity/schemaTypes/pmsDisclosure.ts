import { defineField, defineType } from "sanity";

export const pmsDisclosure = defineType({
  name: "pmsDisclosure",
  title: "PMS Regulatory Disclosure",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Document name",
      type: "string",
      description: "Shown in the disclosures list, e.g. PMS Disclosure Document.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "available",
      options: {
        list: [
          { title: "Available — downloadable", value: "available" },
          { title: "Under preparation", value: "pending" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "file",
      title: "File",
      type: "file",
      description:
        "Upload the PDF / XLSX to host it on the site. Leave empty if you link to an external URL instead.",
      options: { storeOriginalFilename: true },
      hidden: ({ document }) => document?.status === "pending",
      validation: (rule) =>
        rule.custom((file, context) => {
          const doc = context.document as
            | { status?: string; externalUrl?: string }
            | undefined;
          if (doc?.status === "available" && !file && !doc?.externalUrl) {
            return "Add a file upload or an external URL for available documents.";
          }
          return true;
        }),
    }),
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
      description:
        "Alternative to uploading a file — link to a document hosted elsewhere. Ignored if a file is uploaded.",
      hidden: ({ document }) => document?.status === "pending",
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first.",
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", status: "status" },
    prepare: ({ title, status }) => ({
      title,
      subtitle:
        status === "pending" ? "Under preparation" : "Available — downloadable",
    }),
  },
});
