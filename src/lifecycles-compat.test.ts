import { test, expect } from "@jest/globals";
import singleSpaLifeycles from "./lifecycles-compat";

test("sets the init lifecycle when bootstrap is defined", () => {
  expect(
    singleSpaLifeycles({
      async bootstrap() {},
      async mount() {},
      async unmount() {},
    }).init,
  ).toBeDefined();
});

test("is no-op if bootstrap is not defined", () => {
  const lifecycles = {
    async init() {},
    async mount() {},
    async unmount() {},
  };

  const cloned = { ...lifecycles };

  expect(singleSpaLifeycles(lifecycles)).toEqual(cloned);
});

test("throws error if no lifecycles passed in", () => {
  expect(singleSpaLifeycles).toThrow(/lifecycles object/);
});
