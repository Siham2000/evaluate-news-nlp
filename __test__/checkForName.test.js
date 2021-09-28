import { checkForName } from "../src/client/js/nameChecker";
let names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];

describe("Testing the nameChecker functionality", () => {
  test("Testing the checkForName() function", () => {
    names.forEach((name) => {
      expect(checkForName(name)).toBeTruthy();
    });
  });
});
