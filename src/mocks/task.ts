const taskMockResponse: ApiRequestType[] = [
  {
    path: /\/api\/task_list\/[0-9]+/,
    method: "GET",
    response: {
      Status: 0,
      Data: [
        {
          Id: 1,
          Name: "夏休みの宿題",
          Detail: "夏休みの宿題を終わらせること",
          Types: [1],
          Status: "TODO",
          Update: "2025-08-12",
          Due: "2025-08-31",
          Items: [1],
          Kid: 1,
          UserId: 1,
          Family: 1,
        },
        {
          Id: 2,
          Name: "夏休みの観察",
          Detail: "アサガオの日記作成",
          Types: [1, 2],
          Status: "DONE",
          Update: "2025-08-22",
          Due: "2025-08-31",
          Items: [2],
          Kid: 2,
          UserId: 2,
          Family: 1,
        },
      ],
    },
  },
  {
    path: /\/api\/task\/[0-9]+/,
    method: "GET",
    response: {
      Status: 0,
      Data: {
        Id: 1,
        Name: "夏休みの宿題",
        Detail: "夏休みの宿題を終わらせること",
        Types: [1],
        Status: "DOING",
        Update: "2025-08-12",
        Due: "2025-08-31",
        Items: [1],
        Kid: 1,
        UserId: 1,
        Family: 1,
      },
    },
  },
  {
    path: "/api/task",
    method: "POST",
    response: {
      Status: 0,
      Data: {
        Id: 1,
        Name: "夏休みの宿題",
        Detail: "夏休みの宿題を終わらせること",
        Types: [1],
        Status: "TODO",
        Update: "2025-08-12",
        Due: "2025-08-31",
        Items: [1],
        Kid: 1,
        UserId: 1,
        Family: 1,
      },
    },
  },
  {
    path: /\/api\/task_done\/[0-9]+/,
    method: "POST",
    response: {
      Status: 0,
      Data: "タスクを完了にしました",
    },
  },
  {
    path: /\/api\/task\/[0-9]+/,
    method: "PUT",
    response: {
      Status: 0,
      Data: {
        Id: 1,
        Name: "夏休みの宿題",
        Detail: "夏休みの宿題を終わらせること",
        Types: [1],
        Status: "TODO",
        Update: "2025-08-12",
        Due: "2025-08-31",
        Items: [1],
        Kid: 1,
        UserId: 1,
        Family: 1,
      },
    },
  },
  {
    path: /\/api\/task_type_list\/[0-9]+/,
    method: "GET",
    response: {
      Status: 0,
      Data: [
        {
          Id: 1,
          Name: "宿題",
          Family: 1,
        },
        {
          Id: 2,
          Name: "提出物",
          Family: 1,
        },
      ],
    },
  },
  {
    path: /\/api\/task_type\/[0-9]+/,
    method: "GET",
    response: {
      Status: 0,
      Data: {
        Id: 1,
        Name: "宿題",
        Family: 1,
      },
    },
  },
  {
    path: "/api/task_type",
    method: "POST",
    response: {
      Status: 0,
      Data: {
        Id: 1,
        Name: "宿題",
        Family: 1,
      },
    },
  },
  {
    path: /\/api\/task_type\/[0-9]+/,
    method: "PUT",
    response: {
      Status: 0,
      Data: {
        Id: 1,
        Name: "宿題",
        Family: 1,
      },
    },
  },
];

export default taskMockResponse;
