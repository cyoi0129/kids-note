import { http, HttpResponse, type RequestHandler } from "msw";
import mockResopnses from "@/mocks";

const mockHandlers = mockResopnses.map((mock) => {
  if (mock.method === "GET") {
    return http.get(mock.path, () => {
      return HttpResponse.json(mock.response);
    });
  } else if (mock.method === "POST") {
    return http.post(mock.path, () => {
      return HttpResponse.json(mock.response);
    });
  } else if (mock.method === "PUT") {
    return http.put(mock.path, () => {
      return HttpResponse.json(mock.response);
    });
  } else if (mock.method === "DELETE") {
    return http.delete(mock.path, () => {
      return HttpResponse.json(mock.response);
    });
  } else {
    throw new Error(`Unsupported method: ${mock.method}`);
  }
});

export const handlers: RequestHandler[] = mockHandlers;
