# Fixt

I'm type-o positive. I often botch CLI commands in predictable ways, and then have to robotically fix the command.

Why can't I remember that it's `--amend`, not `--ammend` (two 'm's, really, what is my brain even doing there?)

_Enter `fixt` - a rule-based tool that'll grab the previous command, fix it, and then re-run it._

## Installation

`npm run dev:install` or `yarn dev:install`

## Usage

1. Type a command wrong
2. Run the `fixt` command
3. _Voila_ your mistake is fixed and re-run

## Extending the rules

Add additional rules/files to `rules/*.js*` like so:

```js
module.exports = [
  {
    // Detect if the mistake occurred
    test: /my mistake/,
    apply: (command) => {
      // Fix and return the corrected command string
      return command.replace(/my mistake/gi, "all better");
    },
  },
];
```
