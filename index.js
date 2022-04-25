const fs = require("fs");
const os = require("os");
const path = require("path");

const { applyRules } = require("./lib/rules");

if (process.argv.length !== 3) {
  console.log(`fixt must be called with the previous command`);
  process.exit(1);
}

const commandToFix = process.argv[2];

const fixedCommand = applyRules(commandToFix);

const HISTORY_FILENAME = path.join(os.homedir(), `.fixt_history`);
fs.writeFileSync(HISTORY_FILENAME, `${commandToFix}${os.EOL}`, { flag: "a" });

console.log(fixedCommand);
