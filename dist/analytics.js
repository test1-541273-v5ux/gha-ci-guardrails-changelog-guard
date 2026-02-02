"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackEvent = trackEvent;
function trackEvent(name, payload) {
    if (process.env.FOF_ANALYTICS_OPT_IN !== "true") {
        return;
    }
    console.log("analytics-event", JSON.stringify({ name, payload }));
}
