const { RuleTester } = require("eslint");

const rule = {
  schema: [],
  create() {
    return {};
  }
}

const ruleTester = new RuleTester();

ruleTester.run("rule", rule, {
  valid: ["foo"],
  invalid: []
});
