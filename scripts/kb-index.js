const { readdirSync, readFileSync, writeFileSync } = require("node:fs");
const { basename, extname, join } = require("node:path");

const root = join(__dirname, "..");

function escapeMarkdown(text) {
  return text.replace(/[\\`*_[\]<>~&]/g, "\\$&");
}

function articleLink(relativePath) {
  const contents = readFileSync(join(root, relativePath), "utf8").replace(/^\uFEFF/, "");
  const heading = contents.match(/^#[ \t]+([^\r\n]+)/m);
  const title = heading?.[1].trim() || basename(relativePath, extname(relativePath));
  const target = relativePath
    .split("/")
    .map((part) => encodeURIComponent(part).replace(/\(/g, "%28").replace(/\)/g, "%29"))
    .join("/");

  return "- [" + escapeMarkdown(title) + "](" + target + ")";
}

function addDirectory(lines, directory, sectionHeading) {
  const entries = readdirSync(join(root, directory), { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith("."));
  const articleNames = entries
    .filter((entry) => entry.isFile() && /\.md$/i.test(entry.name))
    .map((entry) => entry.name)
    .sort();

  if (sectionHeading || articleNames.length > 0) {
    const subdirectory = directory.split("/").slice(1).join("/");
    lines.push(sectionHeading || "### " + escapeMarkdown(subdirectory), "");
    for (const name of articleNames) {
      lines.push(articleLink(directory + "/" + name));
    }
    lines.push("");
  }

  const subdirectories = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  for (const name of subdirectories) {
    addDirectory(lines, directory + "/" + name);
  }
}

const lines = [
  "# 知识库索引",
  "",
  "<!-- 由 scripts/kb-index.js 生成。 -->",
  "",
  "[通用资料](#通用资料) · [一代](#slime-rancher-1) · [二代](#slime-rancher-2)",
  "",
];

addDirectory(lines, "general", "## 通用资料");
addDirectory(lines, "slime-rancher-1", "## Slime Rancher 1");
addDirectory(lines, "slime-rancher-2", "## Slime Rancher 2");

writeFileSync(join(root, "_INDEX.md"), lines.join("\n"), "utf8");
