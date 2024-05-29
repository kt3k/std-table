import { sortBy } from "@std/collections/sort-by"

type PackageInfo = {
  docs: boolean
  test: boolean
  rc: boolean
  stabilizationIssue?: number
  stabilizationDate: Date | null
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
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: true,
    note:
      "Excluded because it's in the process of migrating from Reader/Writer to Web Stream.",
  },
  assert: {
    docs: false,
    test: true,
    rc: false,
    stabilizationIssue: 4717,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  async: {
    docs: true,
    test: true,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  bytes: {
    docs: true,
    test: true,
    rc: true,
    stabilizationIssue: 4629,
    stabilizationDate: new Date("2024-06-07"),
    stabilized: false,
    excluded: false,
  },
  cli: {
    docs: true,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  collections: {
    docs: true,
    test: true,
    rc: true,
    stabilizationIssue: 4647,
    stabilizationDate: new Date("2024-06-20"),
    stabilized: false,
    excluded: false,
  },
  crypto: {
    docs: false,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  csv: {
    docs: false,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  "data-structures": {
    docs: true,
    test: true,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  datetime: {
    docs: false,
    test: true,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: true,
    note: "Will be re-designed after the Temporal is shipped.",
  },
  dotenv: {
    docs: false,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  encoding: {
    docs: true,
    test: true,
    rc: false,
    stabilizationIssue: 4856,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  expect: {
    docs: true,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  fmt: {
    docs: true,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  "front-matter": {
    docs: true,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  fs: {
    docs: false,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  html: {
    docs: false,
    test: true,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  http: {
    docs: true,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  ini: {
    docs: true,
    test: true,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  io: {
    docs: false,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  json: {
    docs: false,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  jsonc: {
    docs: true,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  log: {
    docs: false,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: true,
    note: "The design is not ready yet.",
  },
  "media-types": {
    docs: true,
    test: true,
    rc: true,
    stabilizationIssue: 4730,
    stabilizationDate: new Date("2024-06-21"),
    stabilized: false,
    excluded: false,
  },
  msgpack: {
    docs: true,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  net: {
    docs: false,
    test: true,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  path: {
    docs: false,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  regexp: {
    docs: true,
    test: true,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  semver: {
    docs: true,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  streams: {
    docs: true,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  testing: {
    docs: false,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  text: {
    docs: true,
    test: true,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  toml: {
    docs: false,
    test: true,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  ulid: {
    docs: true,
    test: true,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  url: {
    docs: true,
    test: true,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  uuid: {
    docs: false,
    test: true,
    rc: false,
    stabilizationIssue: 4748,
    stabilizationDate: null,
    stabilized: false,
    excluded: false,
  },
  webgpu: {
    docs: true,
    test: false,
    rc: false,
    stabilizationDate: null,
    stabilized: false,
    excluded: true,
    note: "Excluded because WebGPU is not yet stable.",
  },
  yaml: {
    docs: false,
    test: false,
    rc: false,
    stabilizationDate: null,
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

function formatDate(date: Date | null) {
  if (date === null) {
    return ""
  }
  return datefmt.format(date)
}

function priority(pkg: PackageInfo) {
  if (pkg.stabilized) {
    return -10
  } else if (pkg.rc) {
    return -9
  } else if (pkg.stabilizationIssue) {
    return -8
  } else if (pkg.test && pkg.docs) {
    return -7
  } else if (pkg.test) {
    return -6
  } else if (pkg.docs) {
    return -5
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
| Package | Docs | Test | RC | 1.0.0 | The issue | Stabilization Date |
| ------- | ---- | ---- | -- | ----- | --------- | ------------------ |`,
  )

  for (const [name, info] of included) {
    console.log(
      `| ${name} | ${formatCheck(info.docs)} | ${formatCheck(info.test)} | ${
        formatCheck(info.rc)
      } | ${formatCheck(info.stabilized)} | ${
        info.stabilizationIssue
          ? `[#${info.stabilizationIssue}](https://github.com/denoland/deno_std/issues/${info.stabilizationIssue})`
          : ""
      } | ${formatDate(info.stabilizationDate)} | ${
        info.excluded ? "Yes" : ""
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
