import { urlChecker } from "../src/client/js/urlChecker";

describe("Testing the urlChecker functionality", () => {
  test("Testing the checker function functionality", () => {
    expect(urlChecker("https://www.google.jo")).toBe(1);
  });
});
