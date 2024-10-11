import { mergeTests } from "@playwright/test";
import { test as steps } from "./steps.fixtures";
import { test as process } from "./process.fixtures";
// import { test as api } from "./api.fixtures";

export const test = mergeTests(steps, process);