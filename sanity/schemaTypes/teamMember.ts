import { defineArrayMember, defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Used as the anchor id for this member on the site.",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first.",
    }),
    defineField({
      name: "headshot",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "initials",
      title: "Initials",
      type: "string",
      description: "Fallback shown when no photo is set, e.g. MG.",
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "highlights",
      title: "Highlights (tags)",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "bio",
      title: "Bio paragraphs",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "paragraph",
          fields: [
            defineField({
              name: "text",
              title: "Text",
              type: "text",
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: { select: { title: "text" } },
        }),
      ],
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
    select: { title: "name", subtitle: "role", media: "headshot" },
  },
});
