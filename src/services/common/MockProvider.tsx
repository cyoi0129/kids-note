"use client";

let triggered = false;

async function enableApiMocking() {
  const { worker } = await import("@/lib/msw/browser");
  await worker.start();
}

export function MockProvider() {
  if (!triggered) {
    triggered = true;
    throw enableApiMocking();
  }

  return null;
}
