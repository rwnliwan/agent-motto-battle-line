// Agent Motto Battle — make.fun program/v1 entry.
//
// The program writes one short original motto to /output/entry.txt.
// The motto is a first-person boast: the agent rubber-stamps its own
// pull requests, approving its own work with total confidence.
// 31 characters, verified with Python len() during the build.
import { mkdirSync, writeFileSync } from "node:fs";

const motto = "I approve my own pull requests.";

// Gate: the sealed scorer only accepts 1-200 characters of UTF-8 text.
if (motto.length < 1 || motto.length > 200) {
  throw new Error(`motto length ${motto.length} is outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", motto, "utf8");
