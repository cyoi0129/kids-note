const itemMockResponse: ApiRequestType[] = [
  {
    path: /\/api\/item_list\/[0-9]+/,
    method: "GET",
    response: {
      Status: 0,
      Data: [
        {
          Id: 1,
          Name: "問題集",
          Detail: "A4サイズの青色のやつ",
          Type: "本",
          Image: "/images/sample_item.jpg",
          Kid: 1,
          Family: 1,
        },
        {
          Id: 2,
          Name: "盆栽",
          Detail: "アサガオの盆栽",
          Type: "もの",
          Image: "",
          Kid: 1,
          Family: 1,
        },
      ],
    },
  },
  {
    path: /\/api\/item\/[0-9]+/,
    method: "GET",
    response: {
      Status: 0,
      Data: {
        Id: 1,
        Name: "問題集",
        Detail: "A4サイズの青色のやつ",
        Type: "本",
        Image: "/images/sample_item.jpg",
        Kid: 1,
        Family: 1,
      },
    },
  },
  {
    path: "/api/item",
    method: "POST",
    response: {
      Status: 0,
      Data: {
        Id: 1,
        Name: "問題集",
        Detail: "A4サイズの青色のやつ",
        Type: "本",
        Image: "/images/sample_item.jpg",
        Kid: 1,
        Family: 1,
      },
    },
  },
  {
    path: /\/api\/item\/[0-9]+/,
    method: "PUT",
    response: {
      Status: 0,
      Data: {
        Id: 1,
        Name: "問題集",
        Detail: "A4サイズの青色のやつ",
        Type: "本",
        Image: "/images/sample_item.jpg",
        Kid: 1,
        Family: 1,
      },
    },
  },
];

export default itemMockResponse;
