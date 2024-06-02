import { sortBy } from "@std/collections/sort-by"

type PackageInfo = {
  docs: boolean
  test: boolean
  stabilizationIssue?: number
  stabilizationDate: Date | null
  rcPlannedDate?: Date
  stabilized: boolean
  excluded: boolean
  note?: string
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
      "Excluded because it's in the process of migrating from Reader/Writer to Web Stream.",
  },
  assert: {
    docs: true,
    test: true,
    stabilizationIssue: 4717,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-03"),
    stabilized: false,
    excluded: false,
  },
  async: {
    docs: true,
    test: true,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-17"),
    stabilized: false,
    excluded: false,
  },
  bytes: {
    docs: true,
    test: true,
    stabilizationIssue: 4629,
    stabilizationDate: new Date("2024-06-07"),
    stabilized: false,
    excluded: false,
  },
  cli: {
    docs: true,
    test: false,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-18"),
    stabilized: false,
    excluded: false,
  },
  collections: {
    docs: true,
    test: true,
    stabilizationIssue: 4647,
    stabilizationDate: new Date("2024-06-20"),
    stabilized: false,
    excluded: false,
  },
  crypto: {
    docs: true,
    test: true,
    stabilizationIssue: 4885,
    stabilizationDate: new Date("2024-06-30"),
    stabilized: false,
    excluded: false,
  },
  csv: {
    docs: false,
    test: false,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-25"),
    stabilized: false,
    excluded: false,
  },
  "data-structures": {
    docs: true,
    test: true,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-11"),
    stabilized: false,
    excluded: false,
  },
  datetime: {
    docs: false,
    test: true,
    stabilizationDate: null,
    stabilized: false,
    excluded: true,
    note: "Will be re-designed after the Temporal is shipped.",
  },
  dotenv: {
    docs: false,
    test: false,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-07-10"),
    stabilized: false,
    excluded: false,
  },
  encoding: {
    docs: true,
    test: true,
    stabilizationIssue: 4856,
    stabilizationDate: new Date("2024-06-30"),
    stabilized: false,
    excluded: false,
  },
  expect: {
    docs: true,
    test: false,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-07-05"),
    stabilized: false,
    excluded: false,
  },
  fmt: {
    docs: true,
    test: false,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-21"),
    stabilized: false,
    excluded: false,
  },
  "front-matter": {
    docs: true,
    test: false,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-07-08"),
    stabilized: false,
    excluded: false,
  },
  fs: {
    docs: false,
    test: false,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-26"),
    stabilized: false,
    excluded: false,
  },
  html: {
    docs: true,
    test: true,
    stabilizationIssue: 4921,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-05"),
    stabilized: false,
    excluded: false,
  },
  http: {
    docs: true,
    test: false,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-24"),
    stabilized: false,
    excluded: false,
  },
  ini: {
    docs: true,
    test: true,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-07-09"),
    stabilized: false,
    excluded: false,
  },
  io: {
    docs: false,
    test: false,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-19"),
    stabilized: false,
    excluded: false,
  },
  json: {
    docs: false,
    test: false,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-27"),
    stabilized: false,
    excluded: false,
  },
  jsonc: {
    docs: true,
    test: false,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-07-01"),
    stabilized: false,
    excluded: false,
  },
  log: {
    docs: false,
    test: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: true,
    note: "The design is not ready yet.",
  },
  "media-types": {
    docs: true,
    test: true,
    stabilizationIssue: 4730,
    stabilizationDate: new Date("2024-06-21"),
    stabilized: false,
    excluded: false,
  },
  msgpack: {
    docs: true,
    test: false,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-07-02"),
    stabilized: false,
    excluded: false,
  },
  net: {
    docs: false,
    test: true,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-10"),
    stabilized: false,
    excluded: false,
  },
  path: {
    docs: true,
    test: false,
    stabilizationIssue: 4922,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-04"),
    stabilized: false,
    excluded: false,
  },
  regexp: {
    docs: true,
    test: true,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-12"),
    stabilized: false,
    excluded: false,
  },
  semver: {
    docs: true,
    test: false,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-07-03"),
    stabilized: false,
    excluded: false,
  },
  streams: {
    docs: true,
    test: false,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-20"),
    stabilized: false,
    excluded: false,
  },
  testing: {
    docs: false,
    test: false,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-28"),
    stabilized: false,
    excluded: false,
  },
  text: {
    docs: true,
    test: true,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-14"),
    stabilized: false,
    excluded: false,
  },
  toml: {
    docs: true,
    test: true,
    stabilizationIssue: 4923,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-06"),
    stabilized: false,
    excluded: false,
  },
  ulid: {
    docs: true,
    test: true,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-12"),
    stabilized: false,
    excluded: false,
  },
  url: {
    docs: true,
    test: true,
    stabilizationIssue: 4924,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-06-07"),
    stabilized: false,
    excluded: false,
  },
  uuid: {
    docs: true,
    test: true,
    stabilizationIssue: 4748,
    stabilizationDate: new Date("2024-06-30"),
    stabilized: false,
    excluded: false,
  },
  webgpu: {
    docs: true,
    test: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: true,
    note: "Excluded because WebGPU is not yet stable.",
  },
  yaml: {
    docs: false,
    test: false,
    stabilizationDate: null,
    rcPlannedDate: new Date("2024-07-05"),
    stabilized: false,
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
  if (pkg.stabilized) {
    return -10
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

function writeTable(pkg: PackageMap) {
  let entries = Object.entries(pkg)
  entries = sortBy(entries, ([, info]) => priority(info))

  const included = entries.filter(([, info]) => !info.excluded)

  console.log(
    `
| Package | Docs | Test | RC | 1.0.0 | The issue | Stabilization Date | RC Planned Date |
| ------- | ---- | ---- | -- | ----- | --------- | ------------------ | --------------- |`,
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
      } | ${formatDate(info.stabilizationDate)} | ${
        formatDate(info.rcPlannedDate)
      } |`,
    )
  }

  console.log(`

### Excluded Packages

| Package | Note |
| ------- | ---- |`)

  const excluded = entries.filter(([, info]) => info.excluded)
  for (const [name, info] of excluded) {
    console.log(`| ${name} | ${info.note ?? ""} |`)
  }
}

writeTable(pkg)
