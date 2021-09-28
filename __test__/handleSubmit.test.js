import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing the handleSubmit functionality", () => {
  test("test submit process handling", () => {
    expect(handleSubmit).toBeDefined();
  });
});
