const familyMockResponse: ApiRequestType[] = [
  {
    path: /\/api\/family\/[0-9]+/,
    method: "GET",
    response: {
      Status: 0,
      Data: {
        Id: 1,
        Name: "木図家",
        Members: [
          {
            Id: 1,
            Name: "木図覇覇",
          },
          {
            Id: 2,
            Name: "木図魔魔",
          },
        ],
      },
    },
  },
  {
    path: "/api/family",
    method: "POST",
    response: {
      Status: 0,
      Data: {
        Id: 1,
        Name: "木図家",
      },
    },
  },
  {
    path: /\/api\/family\/[0-9]+/,
    method: "PUT",
    response: {
      Status: 0,
      Data: {
        Id: 1,
        Name: "木図家",
      },
    },
  },
];

export default familyMockResponse;
