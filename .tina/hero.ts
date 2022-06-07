import type { TinaTemplate } from "@tinacms/cli";
import { buttonsSchema } from "./shared/buttons";

export const heroBlockSchema: TinaTemplate = {
  name: "hero",
  label: "Hero",
  fields: [
    {
      type: "object",
      label: "Buttons",
      name: "buttons",
      list: true,
      ui: {
        component: 'itemListField',
        defaultItem: {
          label: "Button Label",
          link: "/",
        },
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    }
  ]
};
