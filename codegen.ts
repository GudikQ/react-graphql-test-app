
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://binary:8000/query",
  documents: "./src/graphql/**/*.{ts,tsx}",
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
    }
  }
};

export default config;
