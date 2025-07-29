/**
 * Script to update Next.js Image component props
 * 
 * This script will help you update legacy Image props to the new format
 * 
 * To update all remaining components, run:
 * 1. Install dependencies: npm install glob fs-extra
 * 2. Run: node update-image-props.js
 */

const glob = require('glob');
const fs = require('fs-extra');
const path = require('path');

// Find all JSX/JS files
const files = glob.sync('src/**/*.{jsx,js}');

let updatedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  let updated = false;

  // Replace layout="intrinsic" and objectFit="contain" pattern
  if (content.includes('layout="intrinsic"') && content.includes('objectFit="contain"')) {
    content = content.replace(/layout="intrinsic"/g, '');
    content = content.replace(/objectFit="contain"/g, 'style={{ objectFit: "contain" }}');
    updated = true;
  }

  // Replace layout="fill" and objectFit="contain" pattern
  if (content.includes('layout="fill"') && content.includes('objectFit="contain"')) {
    content = content.replace(/layout="fill"/g, 'fill');
    content = content.replace(/objectFit="contain"/g, 'style={{ objectFit: "contain" }}');
    updated = true;
  }

  // Add missing alt attributes
  // This is a simplified version - check results manually
  content = content.replace(/<Image([^>]*)src=([^>]*)>/g, (match, before, after) => {
    if (!match.includes('alt=')) {
      return `<Image${before}src=${after} alt="Image" />`;
    }
    return match;
  });

  // Save if updated
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    updatedFiles++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`Updated ${updatedFiles} files.`);
