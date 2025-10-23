const userMockResponse: ApiRequestType[] = [
  {
    path: "/api/login",
    method: "POST",
    response: {
      Status: 0,
      Data: {
        Token: "dummy_token",
        Info: {
          Id: 1,
          Name: "木図覇覇",
          Email: "user1@test.com",
          Gender: "MALE",
          Family: 1,
        },
      },
    },
  },
  {
    path: /\/api\/user\/[0-9]+/,
    method: "GET",
    response: {
      Status: 0,
      Data: {
        Id: 1,
        Name: "木図覇覇",
        Email: "user1@test.com",
        Gender: "MALE",
        Family: 1,
        Password: "",
      },
    },
  },
  {
    path: "/api/user",
    method: "POST",
    response: {
      Status: 0,
      Data: {
        Token: "dummy_token",
        Info: {
          Id: 1,
          Name: "木図覇覇",
          Email: "user1@test.com",
          Gender: "MALE",
          Family: 1,
        },
      },
    },
  },
  {
    path: /\/api\/user\/[0-9]+/,
    method: "PUT",
    response: {
      Status: 0,
      Data: {
        Token: "dummy_token",
        Info: {
          Id: 1,
          Name: "木図覇覇",
          Email: "user1@test.com",
          Gender: "MALE",
          Family: 1,
        },
      },
    },
  },
];

export default userMockResponse;
