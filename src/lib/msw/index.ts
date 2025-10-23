async function initMocks() {
  // 起動時クライアント環境が再現されないため、実質サーバー側が常に実行される
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen();
    // } else {
    //   const { worker } = await import("./browser");
    //   worker.start();
  }
}

export { initMocks };
