export default {
  en: {
    name: "English",
    load: () => {
      return import("./en.json");
    },
  },
  tr: {
    name: "Türkçe",
    load: () => {
      return import("./tr.json");
    },
  },
};
