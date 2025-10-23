const mailMockResponse: ApiRequestType[] = [
  {
    path: "/api/mail",
    method: "POST",
    response: {
      Status: 0,
      Data: "メールを送信しました",
    },
  },
];

export default mailMockResponse;
