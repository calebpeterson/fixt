const applyRule = (rule, command) => {
  if (rule.test && (rule.test === command || rule.test.test(command))) {
    return rule.apply(command);
  }
  return command;
};

const applyRules = (commandToFix) => {
  const ruleSets = require("require-all")(__dirname + "/../rules");

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

  return fixedCommand;
};

module.exports = { applyRules };
