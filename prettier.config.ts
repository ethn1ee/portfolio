import { type Config } from "prettier";

const config: Config = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "es5",
  semi: true,
  singleQuote: false,

  importOrder: ["^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
