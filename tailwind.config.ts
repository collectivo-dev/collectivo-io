import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        seance: {
          "50": "#fcf4ff",
          "100": "#f7e9fe",
          "200": "#efd2fc",
          "300": "#e6aef9",
          "400": "#d77ef4",
          "500": "#c34de8",
          "600": "#a92dcc",
          "700": "#8e22a9",
          "800": "#761e8a",
          "900": "#641e71",
          "950": "#40074b",
        },
      },
    },
  },
};
