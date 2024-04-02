// import type { Preview } from "@storybook/react";

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;


import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  // Your code that depends on Storybook being initialized
  // For example:
  // preview.onPreloadStories();
  console.log("Storybook initialization complete");
});


export default preview;

