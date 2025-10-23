import familyMockResponse from "./family";
import itemMockResponse from "./item";
import kidMockResponse from "./kid";
import mailMockResponse from "./mail";
import schoolMockResponse from "./school";
import userMockResponse from "./user";
import taskMockResponse from "./task";

const mockResopnses: ApiRequestType[] = [
  ...familyMockResponse,
  ...itemMockResponse,
  ...kidMockResponse,
  ...mailMockResponse,
  ...schoolMockResponse,
  ...userMockResponse,
  ...taskMockResponse,
];

export default mockResopnses;
