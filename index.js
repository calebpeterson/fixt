const fs = require("fs");
const os = require("os");
const path = require("path");

if (process.argv.length !== 3) {
  console.log(`fixt must be called with the previous command`);
  process.exit(1);
}

const commandToFix = process.argv[2];

const ruleSets = require("require-all")(__dirname + "/rules");

const applyRule = (rule, command) => {
  if (rule.test && (rule.test === command || rule.test.test(command))) {
    return rule.apply(command);
  }
  return command;
};

let fixedCommand = commandToFix;
Object.values(ruleSets).forEach((ruleOrRules) => {
  if (Array.isArray(ruleOrRules)) {
    ruleOrRules.forEach((rule) => {
      fixedCommand = applyRule(rule, fixedCommand);
    });
  } else {
    fixedCommand = applyRule(ruleOrRules, fixedCommand);
  }
});

const HISTORY_FILENAME = path.join(os.homedir(), `.fixt_history`);
fs.writeFileSync(HISTORY_FILENAME, `${commandToFix}${os.EOL}`, { flag: "a" });

console.log(commandToFix, "→", fixedCommand);
