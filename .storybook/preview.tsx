import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

import "../src/app/globals.css";

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        Light: "",
        Dark: "dark",
      },
      defaultTheme: "Light",
      attributeName: "data-theme",
    }),
  ],
  parameters: {
    layout: "centered",
    backgrounds: { disable: true },
    a11y: {
      test: "error",
    },
  },
};

export default preview;
