import _ from "lodash";

export interface Timezone {
  name: string;
  offset: string;
}

const fakers = {
  fakeTimezones() {
    const timezones: Array<Timezone> = [
      { name: "UTC", offset: "+00:00" },
      { name: "زمان استاندارد شرقی (EST)", offset: "-05:00" },
      { name: "زمان استاندارد آرام محیطی (PST)", offset: "-08:00" },
      { name: "زمان مرکزی اروپا (CET)", offset: "+01:00" },
    ];

    return _.shuffle(timezones);
  },
};

export default fakers;
