// adsgfasdf asdfg asdf asdf asdf

interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}
interface BrandLessWatch {
  heartRate: string;
  stopwatch: boolean;
}
interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  aiFeature: boolean;
}
const poorDeveloper: Developer<
  BrandLessWatch,
  { brand: string; engineCapacity: string }
> = {
  name: "mr poor",
  salary: 12,
  device: {
    brand: "lenovo",
    model: "l23",
    releasedYear: "2002",
  },
  smartWatch: {
    heartRate: "200",
    stopwatch: false,
  },
  bike: {
    brand: "yamaha",
    engineCapacity: "200",
  },
};
const richDeveloper: Developer<AppleWatch> = {
  name: "mr Rich",
  salary: 12,
  device: {
    brand: "lenovo",
    model: "l23",
    releasedYear: "2002",
  },
  smartWatch: {
    heartRate: "200",
    calculator: false,
    callSupport: true,
    aiFeature: true,
  },
};
