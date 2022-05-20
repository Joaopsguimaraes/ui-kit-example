import YourTheme from "./YourTheme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs:{
    theme: YourTheme
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}