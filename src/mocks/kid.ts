const kidMockResponse: ApiRequestType[] = [
  {
    path: /\/api\/kid_list\/[0-9]+/,
    method: "GET",
    response: {
      Status: 0,
      Data: [
        {
          Id: 1,
          Name: "木図寧々",
          Birth: "2015-09-01",
          Gender: "FEMALE",
          Family: 1,
          School: 1,
        },
        {
          Id: 2,
          Name: "木図煮煮",
          Birth: "2018-07-01",
          Gender: "MALE",
          Family: 1,
          School: 1,
        },
      ],
    },
  },
  {
    path: /\/api\/kid\/[0-9]+/,
    method: "GET",
    response: {
      Status: 0,
      Data: {
        Id: 1,
        Name: "木図寧々",
        Birth: "2015-09-01",
        Gender: "FEMALE",
        Family: 1,
        School: 1,
      },
    },
  },
  {
    path: "/api/kid",
    method: "POST",
    response: {
      Status: 0,
      Data: {
        Id: 1,
        Name: "木図寧々",
        Birth: "2015-09-01",
        Gender: "FEMALE",
        Family: 1,
        School: 1,
      },
    },
  },
  {
    path: /\/api\/kid\/[0-9]+/,
    method: "PUT",
    response: {
      Status: 0,
      Data: {
        Id: 1,
        Name: "木図寧々",
        Birth: "2015-09-01",
        Gender: "FEMALE",
        Family: 1,
        School: 1,
      },
    },
  },
];

export default kidMockResponse;
