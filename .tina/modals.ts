import type { TinaTemplate } from "tinacms"
import { backgroundSchema } from "./shared/background";
import { navigationLabelSchema } from "./shared/navigation-label";

const defaultCard = {
  name: "Name",
  twitter: "Twitter",
  country: "us",
  badge: "cadet",
};

export const modalsBlockSchema: TinaTemplate = {
  name: "modals",
  label: "Modals",
  ui: {
    defaultItem: {
      headline: "This is the main headline",
      items: [defaultCard, defaultCard, defaultCard],
    },
  },
  fields: [
    backgroundSchema,
    {
      label: "",
      name: "rule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Headline",
      name: "headline",
      type: "string",
    },
    {
      label: "Subhead",
      name: "subhead",
      type: "string",
    },
    {
      label: "Body",
      name: "body",
      type: "rich-text",
    },
    {
      label: "Cards",
      name: "items",
      type: "object",
      list: true,
      ui: {
        component: 'itemListField',
      },
      fields: [
        {
          label: "Button Label",
          name: "buttonLabel",
          type: "string",
        },
        {
          label: "Button Label Second Line",
          name: "buttonLabelSub",
          type: "string",
        },
        {
          label: "Headline",
          name: "headline",
          type: "string",
        },
        {
          label: "Body",
          name: "body",
          type: "string",
          ui: {
            component: "textarea"
          }
        },
      ]
    },
    {
      label: "",
      name: "rule2",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    navigationLabelSchema,
  ],
};
