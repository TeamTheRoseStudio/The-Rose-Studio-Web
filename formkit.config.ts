// formkit.config.js
/* In this file, export your final config.
It will automatically be injected into the playground for you.
Imports from other playground files are supported. */
import { generateClasses } from "@formkit/themes";
import { DefaultConfigOptions } from "@formkit/vue";

const config: DefaultConfigOptions = {
  classes: generateClasses({
    text: {
      label: "text-white"
    }
  })
};

export default config;
