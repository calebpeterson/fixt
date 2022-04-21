module.exports = [
  {
    test: /ammend/,
    apply: (command) => command.replace(/ammend/gi, "amend"),
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
