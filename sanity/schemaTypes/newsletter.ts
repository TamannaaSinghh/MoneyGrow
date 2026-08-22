import { defineField, defineType } from "sanity";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export const newsletter = defineType({
  name: "newsletter",
  title: "Newsletter",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "Letter date",
      type: "date",
      description:
        "The date on the letter itself. Drives the month + year shown on the card and the position in the archive.",
      options: { dateFormat: "DD MMM YYYY" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "MoneyGrow Reflections",
      description: "Heading shown next to the cover, e.g. MoneyGrow Reflections.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "file",
      title: "PDF",
      type: "file",
      description:
        "Upload the newsletter PDF to host it on the site. Leave empty if you link to an external URL instead.",
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
    defineField({
      name: "blurb",
      title: "Summary (optional)",
      type: "text",
      rows: 3,
      description:
        "One or two lines shown beside the cover. Leave empty to use the standard monthly wording.",
    }),
    defineField({
      name: "coverImage",
      title: "Cover image (optional)",
      type: "image",
      options: { hotspot: true },
      description:
        "Replaces the month/year tile on the card. Leave empty to keep the default tile.",
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Oldest first",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", date: "date", media: "coverImage" },
    prepare: ({ title, date, media }) => {
      const [y, m, d] = String(date ?? "").split("-").map(Number);
      const monthLong = MONTHS[m - 1];
      return {
        title: monthLong ? `${monthLong} ${y}` : "No date set",
        subtitle: monthLong
          ? `${title} — ${String(d).padStart(2, "0")} ${monthLong.slice(0, 3)} ${y}`
          : title,
        media,
      };
    },
  },
});
