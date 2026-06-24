import { defineArrayMember, defineField, defineType } from "sanity";

export const atAGlance = defineType({
  name: "atAGlance",
  title: "Hero — Info card",
  type: "document",
  fields: [
    defineField({
      name: "metrics",
      title: "Metrics",
      description:
        "The value + label pairs shown in the homepage hero info card.",
      type: "array",
      validation: (rule) => rule.required().min(1).max(6),
      of: [
        defineArrayMember({
          type: "object",
          name: "metric",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              description: "e.g. 23+, 3 – 5, ₹50 L, Nil",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: "e.g. Yrs lead PM, Yr horizon",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Info card (Hero)" }),
  },
});
