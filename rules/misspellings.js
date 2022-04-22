module.exports = [
  {
    test: /ammend/,
    apply: (command) => command.replace(/ammend/gi, "amend"),
  },
  {
    test: /chekout/,
    apply: (command) => command.replace(/chekout/gi, "checkout"),
  },
  {
    test: /chekcout/,
    apply: (command) => command.replace(/chekcout/gi, "checkout"),
  },
  {
    test: /gti/,
    apply: (command) => command.replace(/gti/gi, "amend"),
  },
  {
    test: /clera/,
    apply: (command) => command.replace(/clera/gi, "clear"),
  },
];
