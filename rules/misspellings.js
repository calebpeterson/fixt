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
    apply: (command) => command.replace(/gti/gi, "git"),
  },
  {
    test: /clera/,
    apply: (command) => command.replace(/clera/gi, "clear"),
  },
  {
    test: /sattus/,
    apply: (command) => command.replace(/sattus/gi, "status"),
  },
  {
    test: /staatus/,
    apply: (command) => command.replace(/staatus/gi, "status"),
  },
  {
    test: /tsatus/,
    apply: (command) => command.replace(/tsatus/gi, "status"),
  },
  {
    test: /tatus/,
    apply: (command) => command.replace(/tatus/gi, "status"),
  },
];
