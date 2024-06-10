import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-undef": 0,
    },
  },
  {
    ignores: [".cache", "build", "**/node_modules/**", ".strapi"],
  },
];
