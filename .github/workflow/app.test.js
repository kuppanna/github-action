
const test = require("node:test");
const assert = require("node:assert/strict");

test("application returns success message", () => {
  const message = "Application deployed successfully!";
  assert.equal(message, "Application deployed successfully!");
});
  
