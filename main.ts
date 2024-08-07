import { sortBy } from "@std/collections/sort-by"
import { parseArgs } from "@std/cli/parse-args"

type PackageInfo = {
  docs: boolean
  test: boolean
  stabilizationIssue?: number
  stabilizationDate: Date | null
  stabilizationPlannedDate?: Date
  rcDate?: Date
  rcPlannedDate?: Date
  stabilized: boolean
  excluded: boolean
  note?: string
  reviewers?: string
}

type Package =
  | "archive"
  | "assert"
  | "async"
  | "bytes"
  | "cli"
  | "collections"
  | "crypto"
  | "csv"
  | "data-structures"
  | "datetime"
  | "dotenv"
  | "encoding"
  | "expect"
  | "fmt"
  | "front-matter"
  | "fs"
  | "html"
  | "http"
  | "ini"
  | "io"
  | "json"
  | "jsonc"
  | "log"
  | "media-types"
  | "msgpack"
  | "net"
  | "path"
  | "regexp"
  | "semver"
  | "streams"
  | "testing"
  | "text"
  | "toml"
  | "ulid"
  | "url"
  | "uuid"
  | "webgpu"
  | "yaml"

type PackageMap = Record<Package, PackageInfo>

const pkg: PackageMap = {
  archive: {
    docs: false,
    test: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: true,
    note:
      "This package is excluded because it’s in the process of a re-design.",
  },
  assert: {
    docs: true,
    test: true,
    stabilizationIssue: 4717,
    rcDate: new Date("2024-06-03"),
    stabilizationDate: new Date("2024-07-06"),
    stabilized: true,
    excluded: false,
    reviewers: "Jo, Luca",
  },
  async: {
    docs: true,
    test: true,
    stabilizationIssue: 5001,
    rcDate: new Date("2024-06-15"),
    stabilizationDate: new Date("2024-07-19"),
    stabilized: true,
    excluded: false,
  },
  bytes: {
    docs: true,
    test: true,
    stabilizationIssue: 4629,
    rcDate: new Date("2024-05-07"),
    stabilizationDate: new Date("2024-06-06"),
    stabilized: true,
    excluded: false,
    reviewers: "Jo, Luca",
  },
  cli: {
    docs: true,
    test: true,
    stabilizationIssue: 5002,
    rcDate: new Date("2024-06-18"),
    stabilizationDate: new Date("2024-07-19"),
    stabilized: true,
    excluded: false,
  },
  collections: {
    docs: true,
    test: true,
    stabilizationIssue: 4647,
    rcDate: new Date("2024-05-20"),
    stabilizationDate: new Date("2024-06-20"),
    stabilized: true,
    excluded: false,
    reviewers: "Jo, Luca",
  },
  crypto: {
    docs: true,
    test: true,
    stabilizationIssue: 4885,
    rcDate: new Date("2024-05-31"),
    stabilizationDate: new Date("2024-06-30"),
    stabilized: true,
    excluded: false,
    reviewers: "Jo, Luca",
  },
  csv: {
    docs: true,
    test: true,
    stabilizationIssue: 5012,
    rcDate: new Date("2024-06-27"),
    stabilizationDate: new Date("2024-08-04"),
    stabilized: false,
    excluded: false,
  },
  "data-structures": {
    docs: true,
    test: true,
    stabilizationIssue: 4986,
    rcDate: new Date("2024-06-10"),
    stabilizationDate: new Date("2024-07-12"),
    stabilized: true,
    excluded: false,
  },
  datetime: {
    docs: false,
    test: true,
    stabilizationDate: null,
    stabilized: false,
    excluded: true,
    note: "This package will be re-designed after Temporal is shipped.",
  },
  dotenv: {
    docs: true,
    test: false,
    stabilizationIssue: 5018,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-07-05"),
    stabilizationPlannedDate: new Date("2024-07-26"),
    stabilized: false,
    excluded: true,
    note:
      "This package is excluded because this feature conflicts with Deno CLI --env option.",
  },
  encoding: {
    docs: true,
    test: true,
    stabilizationIssue: 4856,
    rcDate: new Date("2024-05-30"),
    stabilizationDate: new Date("2024-06-30"),
    stabilized: true,
    excluded: false,
  },
  expect: {
    docs: true,
    test: true,
    stabilizationIssue: 5014,
    rcDate: new Date("2024-07-01"),
    stabilizationDate: new Date("2024-07-26"),
    stabilized: true,
    excluded: false,
  },
  fmt: {
    docs: true,
    test: true,
    stabilizationIssue: 5005,
    rcDate: new Date("2024-07-10"),
    stabilizationDate: new Date("2024-08-02"),
    stabilized: true,
    excluded: false,
  },
  "front-matter": {
    docs: true,
    test: true,
    stabilizationIssue: 5016,
    rcDate: new Date("2024-07-03"),
    stabilizationDate: new Date("2024-07-26"),
    stabilized: true,
    excluded: false,
  },
  fs: {
    docs: true,
    test: true,
    stabilizationIssue: 5008,
    rcDate: new Date("2024-06-20"),
    stabilizationDate: new Date("2024-07-26"),
    stabilized: true,
    excluded: false,
  },
  html: {
    docs: true,
    test: true,
    stabilizationIssue: 4921,
    rcDate: new Date("2024-06-05"),
    stabilizationDate: new Date("2024-07-12"),
    stabilized: true,
    excluded: false,
  },
  http: {
    docs: true,
    test: true,
    stabilizationIssue: 5007,
    rcDate: new Date("2024-06-25"),
    stabilizationDate: new Date("2024-08-02"),
    stabilized: true,
    excluded: false,
  },
  ini: {
    docs: true,
    test: true,
    stabilizationIssue: 5017,
    rcDate: new Date("2024-07-09"),
    stabilizationDate: new Date("2024-07-30"),
    stabilized: false,
    excluded: true,
    note:
      "This package is excluded because there still remain various concerns about parse and stringify behavior. See #5614",
  },
  io: {
    docs: false,
    test: false,
    stabilizationIssue: 5003,
    stabilizationDate: null,
    stabilized: false,
    excluded: true,
    note:
      "No consensus on what should/shouldn't be included in this module yet. Ideally this module shouldn't exist. See #5059 for more details.",
  },
  json: {
    docs: true,
    test: true,
    stabilizationIssue: 5009,
    rcDate: new Date("2024-06-21"),
    stabilizationDate: new Date("2024-07-26"),
    stabilized: true,
    excluded: false,
  },
  jsonc: {
    docs: true,
    test: true,
    stabilizationIssue: 5011,
    rcDate: new Date("2024-06-24"),
    stabilizationDate: new Date("2024-07-26"),
    stabilized: true,
    excluded: false,
  },
  log: {
    docs: false,
    test: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: true,
    note: "The design of this package is not ready yet.",
  },
  "media-types": {
    docs: true,
    test: true,
    stabilizationIssue: 4730,
    rcDate: new Date("2024-05-21"),
    stabilizationDate: new Date("2024-06-24"),
    stabilized: true,
    excluded: false,
  },
  msgpack: {
    docs: true,
    test: true,
    stabilizationIssue: 5000,
    rcDate: new Date("2024-06-12"),
    stabilizationDate: new Date("2024-07-12"),
    stabilized: true,
    excluded: false,
  },
  net: {
    docs: true,
    test: true,
    stabilizationIssue: 5006,
    rcDate: new Date("2024-07-09"),
    stabilizationDate: new Date("2024-08-02"),
    stabilized: true,
    excluded: false,
  },
  path: {
    docs: true,
    test: true,
    stabilizationIssue: 4922,
    rcDate: new Date("2024-06-04"),
    stabilizationDate: new Date("2024-07-12"),
    stabilized: true,
    excluded: false,
  },
  regexp: {
    docs: true,
    stabilizationIssue: 4998,
    test: true,
    rcDate: new Date("2024-06-11"),
    stabilizationDate: new Date("2024-07-12"),
    stabilized: true,
    excluded: false,
  },
  semver: {
    docs: true,
    test: true,
    stabilizationIssue: 5013,
    rcDate: new Date("2024-06-28"),
    stabilizationDate: new Date("2024-08-02"),
    stabilized: true,
    excluded: false,
  },
  streams: {
    docs: true,
    test: true,
    stabilizationIssue: 5004,
    rcDate: new Date("2024-06-19"),
    stabilizationDate: new Date("2024-07-26"),
    stabilized: true,
    excluded: false,
  },
  testing: {
    docs: true,
    test: true,
    stabilizationIssue: 5010,
    rcDate: new Date("2024-06-26"),
    stabilizationDate: new Date("2024-08-02"),
    stabilized: true,
    excluded: false,
  },
  text: {
    docs: true,
    test: true,
    stabilizationIssue: 4999,
    rcDate: new Date("2024-06-11"),
    stabilizationDate: new Date("2024-07-19"),
    stabilized: true,
    excluded: false,
  },
  toml: {
    docs: true,
    test: true,
    stabilizationIssue: 4923,
    rcDate: new Date("2024-06-06"),
    stabilizationDate: new Date("2024-07-12"),
    stabilized: true,
    excluded: false,
  },
  ulid: {
    docs: true,
    test: true,
    stabilizationIssue: 4996,
    rcDate: new Date("2024-06-10"),
    stabilizationDate: new Date("2024-07-19"),
    stabilized: true,
    excluded: false,
  },
  url: {
    docs: true,
    test: true,
    stabilizationIssue: 4924,
    rcDate: new Date("2024-06-07"),
    stabilizationDate: new Date("2024-07-07"),
    stabilized: false,
    excluded: true,
    note: "This package needs more discussion. See #4992 for details.",
  },
  uuid: {
    docs: true,
    test: true,
    stabilizationIssue: 4748,
    rcDate: new Date("2024-05-31"),
    stabilizationDate: new Date("2024-06-30"),
    stabilized: true,
    excluded: false,
  },
  webgpu: {
    docs: true,
    test: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: true,
    note: "This package is excluded because WebGPU is not yet stable.",
  },
  yaml: {
    docs: true,
    test: false,
    stabilizationIssue: 5015,
    rcDate: new Date("2024-07-02"),
    stabilizationDate: new Date("2024-07-26"),
    stabilized: true,
    excluded: false,
  },
}

function formatCheck(b: boolean) {
  return b ? "✅" : ""
}

const datefmt = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
})

function formatDate(date: Date | null | undefined) {
  if (date === null || date === undefined) {
    return ""
  }
  return datefmt.format(date)
}

function priority(pkg: PackageInfo) {
  if (pkg.stabilized && pkg.stabilizationDate) {
    return -10 + (pkg.stabilizationDate.getTime()) / 1800000000000
  } else if (pkg.stabilizationDate) {
    return -9 + (pkg.stabilizationDate.getTime()) / 1800000000000
  } else if (pkg.rcPlannedDate) {
    return -8 + pkg.rcPlannedDate.getTime() / 1800000000000
  } else if (pkg.stabilizationIssue) {
    return -7
  } else if (pkg.test && pkg.docs) {
    return -6
  } else if (pkg.test) {
    return -5
  } else if (pkg.docs) {
    return -4
  } else if (pkg.excluded) {
    return 1
  }
  return 0
}

function tableForRoadmapIssue(
  included: [string, PackageInfo][],
  excluded: [string, PackageInfo][],
) {
  console.log(
    `
| Package | Docs | Test | RC | 1.0.0 | The issue | Stabilization Date |
| ------- | ---- | ---- | -- | ----- | --------- | ------------------ |`,
  )

  for (const [name, info] of included) {
    console.log(
      `| [${name}](https://jsr.io/@std/${name}) | ${formatCheck(info.docs)} | ${
        formatCheck(info.test)
      } | ${formatCheck(info.stabilizationDate !== null)} | ${
        formatCheck(info.stabilized)
      } | ${
        info.stabilizationIssue
          ? `[#${info.stabilizationIssue}](https://github.com/denoland/deno_std/issues/${info.stabilizationIssue})`
          : ""
      } | ${formatDate(info.stabilizationDate)} |`,
    )
  }

  console.log(`

### Excluded Packages

| Package | Note |
| ------- | ---- |`)

  for (const [name, info] of excluded) {
    console.log(`| ${name} | ${info.note ?? ""} |`)
  }
}

function tableForBlog(
  included: [string, PackageInfo][],
) {
  console.log(
    `
| Package | Stabilized | Stabilization Date | RC Planned Date | Stabilization Planned Date |
| ------- | ---------- | ------------------ | --------------- | -------------------------- |`,
  )

  for (const [name, info] of included) {
    console.log(
      `| [${name}](https://jsr.io/@std/${name}) | ${
        formatCheck(info.stabilized)
      } | ${formatDate(info.stabilizationDate)} | ${
        formatDate(info.rcPlannedDate)
      } | ${formatDate(info.stabilizationPlannedDate)} |`,
    )
  }
}

function words(included: [string, PackageInfo][]) {
  for (const [name, _info] of included) {
    console.log(name)
  }
}

const args = parseArgs(Deno.args, {
  boolean: ["--blog"],
})

let entries = Object.entries(pkg)
entries = sortBy(entries, ([, info]) => priority(info))

const included = entries.filter(([, info]) => !info.excluded)
const excluded = entries.filter(([, info]) => info.excluded)
excluded.sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0)

if (args.blog) {
  tableForBlog(included)
} else if (args.words) {
  words(included)
} else {
  tableForRoadmapIssue(included, excluded)
}
