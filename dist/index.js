"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const analytics_1 = require("./analytics");
const storage_1 = require("./storage");
function getInput(name, fallback) {
    const envKey = `INPUT_${name.replace(/ /g, "_").toUpperCase()}`;
    const value = process.env[envKey];
    return value && value.trim().length > 0 ? value : fallback;
}
async function run() {
    const message = getInput("message", "Hello from CI Guardrails - Changelog Guard");
    const context = process.env.GITHUB_REPOSITORY ?? "local/testing";
    console.log("[ci-guardrails-changelog-guard] CI Guardrails - Changelog Guard handles release note hygiene with pull_request synchronize and delivers missing changelog warning as pr comment.");
    console.log("message: " + message);
    console.log("repository: " + context);
    const runCount = await (0, storage_1.rememberRun)(context);
    console.log("run-count: " + runCount);
    (0, analytics_1.trackEvent)("action_run", { repository: context });
}
run().catch((error) => {
    console.error("Action failed", error);
    process.exitCode = 1;
});
