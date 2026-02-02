"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rememberRun = rememberRun;
const inMemoryStore = new Map();
async function rememberRun(key) {
    const current = inMemoryStore.get(key) ?? 0;
    const next = current + 1;
    inMemoryStore.set(key, next);
    return next;
}
