export const portfolios = {
  Projects: [
    {
      type: "featured",
      name: "Photonics",
      image: require("./image/Photonics.png"),
      description:
        "A IoT based smart bio-chemistry analyzer to read, store and upload analyzed data to Servers.",
      demo: "https://mbeded.systems",
      tools: ["RPi", "Photo-diode", "Wi-Fi", "BLE"],
    },
    {
      type: "featured",
      name: "HSRP Recognition",
      image: require("./image/HSRP.png"),
      description:
        "An AI based high security number plate detection and optical character recognition system.",
      demo: "https://mbeded.systems",
      source: "https://github.com/userHarpreet/anprBasic",
      tools: ["Machine Learning", "OCR", "Yolo-world"],
    },
    {
      type: "featured",
      name: "muteSign - Speak w/ gestures",
      image: require("./image/muteSign.png"),
      description:
        "Created a system which helps a disabled person to speak using hand gesture.",
      tools: ["Intel Edison", "NLP", "Gyroscope"],
    },
    {
      type: "regular",
      name: "Mind controller wheel-chair",
      description:
        "Developed a wheel-chair which moves with α and γ brain waves.",
      tools: ["Arduino", "Ultrasonic Sensor", "BWS"],
    },
    {
      type: "regular",
      name: "Portable DMFD",
      description:
        "Designed a multi-zone portable door frame metal detector with data-logging.",
      tools: ["STM32", "ADC", "EMF Sernsor"],
    },
    {
      type: "regular",
      name: "E-Bike BMS",
      description:
        "Charging/discharging control & protection using BMS for the pack of E-bike",
      tools: ["TI bqEVSW", "Mosfet Drivers"],
    },
  ],
  Products: [
    {
      type: "featured",
      name: "mBEDed One",
      image: require("./image/mBEDedOne.webp"),
      description:
        "A upgrade to Arduino UNO while keeping the same core features intact.",
      demo: "https://mbeded.systems",
      source: "https://github.com/mBEDed/mBEDed-One",
      tools: ["Arduino", "Autodesk Eagle"],
    },
    {
      type: "featured",
      name: "arkAVR",
      image: require("./image/arkAVR.webp"),
      description:
        "A Hardware to program any kind of AVR µController.",
      demo: "https://github.com/mBEDed/arkAVR",
      tools: ["Microchip (AVR)", "AVRDude"],
    },
    {
      type: "featured",
      name: "mBEDed Xprint",
      image: require("./image/mBEDedXprint.webp"),
      description:
        "A minimal, serial terminal for data transfers. Soon would be available on GitHub.",
      source: "https://github.com/zonayedpca/AlgoDS.js",
      tools: ["VS Code", "C#", "Atom", "Sublime Text"],
    },
    {
      type: "regular",
      name: " ",
      description:
        "More coming soon...",
      tools: [" "],
    },
  ],
}
