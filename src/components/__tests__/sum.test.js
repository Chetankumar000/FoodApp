import { sum } from "../sum";

test("Testing sum function", () => {
  const result = sum(3, 4);

  expect(result).toBe(7);
});
