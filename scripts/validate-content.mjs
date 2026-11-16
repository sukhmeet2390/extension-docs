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

    const bodyLines = lines.slice(closingIndex + 1);
    const markdownH1Line = bodyLines.findIndex((line) => /^#\s+/.test(line));
    if (markdownH1Line !== -1) {
      errors.push(
        `${relativePath}:${closingIndex + markdownH1Line + 2}: markdown H1 duplicates the layout title; use frontmatter title only`,
      );
    }

    const internalChecklistLine = bodyLines.findIndex((line) => /assets used/i.test(line));
    if (internalChecklistLine !== -1) {
      errors.push(
        `${relativePath}:${closingIndex + internalChecklistLine + 2}: internal "Assets used" checklist must not be published`,
      );
    }

    for (const [index, line] of bodyLines.entries()) {
      const imageMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
      if (!imageMatch) continue;

      const [, altText, imageUrl] = imageMatch;
      if (!altText.trim()) {
        errors.push(`${relativePath}:${closingIndex + index + 2}: image alt text is required`);
      }

      if (imageUrl.startsWith('/assets/')) {
        const assetPath = path.join(root, 'public', imageUrl.slice(1));
        if (!fs.existsSync(assetPath)) {
          errors.push(`${relativePath}:${closingIndex + index + 2}: missing image asset ${imageUrl}`);
        }
      }
    }
  }
}

if (errors.length > 0) {
  console.error('Content validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Content validation passed.');
