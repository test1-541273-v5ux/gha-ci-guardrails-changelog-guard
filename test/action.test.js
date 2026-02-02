const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("action.yml exists and references dist/index.js", () => {
  const action = fs.readFileSync("action.yml", "utf8");
  assert.match(action, /main:\s+dist\/index\.js/);
  assert.match(action, /name:\s+CI Guardrails \- Changelog Guard/);
});
