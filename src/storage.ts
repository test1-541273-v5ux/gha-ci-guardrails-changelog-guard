const inMemoryStore = new Map<string, number>();

export async function rememberRun(key: string): Promise<number> {
  const current = inMemoryStore.get(key) ?? 0;
  const next = current + 1;
  inMemoryStore.set(key, next);
  return next;
}
