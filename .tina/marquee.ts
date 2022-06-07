import type { TinaTemplate } from "tinacms"
import { backgroundSchema } from "./shared/background";
import { navigationLabelSchema } from "./shared/navigation-label";

export const marqueeBlockSchema: TinaTemplate = {
  name: "marquee",
  label: "Marquee",
  ui: {
    defaultItem: {
      marqueeText: "Marquee text"
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
      label: "Marquee Text",
      name: "marqueeText",
      type: "string",
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
