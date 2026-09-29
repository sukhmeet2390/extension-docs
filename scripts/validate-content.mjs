import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentRoots = [
  path.join(root, 'src', 'content', 'blog'),
  path.join(root, 'src', 'content', 'comparisons'),
];
const errors = [];

function markdownFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    return entry.isDirectory() ? markdownFiles(filePath) : entry.name.endsWith('.md') ? [filePath] : [];
  });
}

for (const directory of contentRoots) {
  for (const filePath of markdownFiles(directory)) {
    const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
    const relativePath = path.relative(root, filePath);
    const closingIndex = lines.findIndex((line, index) => index > 0 && line === '---');

    if (lines[0] !== '---' || closingIndex < 1) {
      errors.push(`${relativePath}: missing valid frontmatter`);
      continue;
    }

    const duplicateTitleLine = lines.findIndex(
      (line, index) => index > closingIndex && line.startsWith('title:'),
    );
    if (duplicateTitleLine !== -1) {
      errors.push(`${relativePath}:${duplicateTitleLine + 1}: duplicate frontmatter detected`);
    }
  }
}

if (errors.length > 0) {
  console.error('Content validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Content validation passed.');
