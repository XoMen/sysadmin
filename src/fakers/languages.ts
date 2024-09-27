import _ from "lodash";

export interface Language {
  name: string;
  code: string;
}

const fakers = {
  fakeLanguages() {
    const languages: Array<Language> = [
      { name: "انگلیسی", code: "en" },
      { name: "اسپانیایی", code: "es" },
      { name: "فرانسوی", code: "fr" },
      { name: "آلمانی", code: "de" },
      { name: "چینی", code: "zh" },
    ];

    return _.shuffle(languages);
  },
};

export default fakers;
