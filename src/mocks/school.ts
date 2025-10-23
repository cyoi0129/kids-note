const schoolsMockResponse: ApiRequestType[] = [
  {
    path: "/api/schools",
    method: "GET",
    response: {
      Status: 0,
      Data: [
        {
          Id: 1,
          Type: "公立",
          Name: "木図小学校",
          Prefecture: "東京都",
          City: "品川区",
        },
        {
          Id: 2,
          Type: "私立",
          Name: "野都小学校",
          Prefecture: "東京都",
          City: "大田区",
        },
      ],
    },
  },
];

export default schoolsMockResponse;
