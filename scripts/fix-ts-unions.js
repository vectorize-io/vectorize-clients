#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Function to extract imported types from the file
function extractImportedTypes(content) {
  const typeImports = [];
  const importRegex = /import type \{ (\w+) \} from '\.\/\w+';/g;
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    typeImports.push(match[1]);
  }
  
  return typeImports;
}

function fixJsonValueBug(content) {
  // Fix the specific pattern in ToJSONTyped functions where 'value' is the parameter
  content = content.replace(
    /export function (\w+)ToJSONTyped\(value\?: ([^,]+) \| null, ignoreDiscriminator: boolean = false\): any \{[\s\S]*?return json;/g,
    (match) => match.replace('return json;', 'return value;')
  );
  
  return content;
}

// Update both functions to use this more precise fix:

// Function to extract imported types from the file
function extractImportedTypes(content) {
  const typeImports = [];
  // Match both single-line and multi-line imports
  const importRegex = /import type \{ (\w+) \} from ['"]\.\/\w+['"];/g;
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    typeImports.push(match[1]);
  }
  
  console.log(`  Found imported types: ${typeImports.join(', ')}`);
  return typeImports;
}

// Function to fix union type definitions
function fixUnionTypes(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Pattern to match empty type definitions
  const emptyTypePattern = /export type (\w+) = ;/;
  
  const match = emptyTypePattern.exec(content);
  if (match) {
    const typeName = match[1];
    console.log(`Fixing empty type: ${typeName}`);
    
    // Extract imported types from this file
    const importedTypes = extractImportedTypes(content);
    
    // Filter imported types that are likely part of this union
    const unionTypes = importedTypes.filter(t => {
      const isUsed = content.includes(`instanceof${t}`) || 
             content.includes(`${t}FromJSON`) ||
             content.includes(`${t}ToJSON`);
      if (isUsed) {
        console.log(`  Type ${t} is part of the union`);
      }
      return isUsed;
    });
    
    if (unionTypes.length > 0) {
      // Create the union type
      const unionTypeDefinition = `export type ${typeName} = ${unionTypes.join(' | ')};`;
      
      // Replace the empty type definition
      content = content.replace(
        `export type ${typeName} = ;`,
        unionTypeDefinition
      );
      
      console.log(`  Replaced with: ${unionTypeDefinition}`);
    } else {
      console.log(`  WARNING: No union types found for ${typeName}`);
    }
  }
  
  // Only write if we made changes
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed ${filePath}`);
  }
}

function fixAnyTypeImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Remove AnyType imports
  content = content.replace(/import type \{ AnyType \} from '\.\/AnyType';\n/g, '');
  content = content.replace(/import \{\s*[^}]*\s*\} from '\.\/AnyType';\n/g, '');
  
  // Replace AnyType with any
  content = content.replace(/: AnyType/g, ': any');
  
  // Fix the json/value bug with the more precise function
  content = fixJsonValueBug(content);
  
  // Only write if we made changes
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

// Main function to process all TypeScript files
function processTypeScriptFiles(directory) {
  const modelsDir = path.join(directory, 'src', 'models');
  
  if (!fs.existsSync(modelsDir)) {
    console.error(`Models directory not found: ${modelsDir}`);
    process.exit(1);
  }
  
  // Files that typically have union type issues
  const filesToFix = [
    'CreateAIPlatformConnectorRequest.ts',
    'CreateSourceConnectorRequest.ts',
    'CreateDestinationConnectorRequest.ts'
  ];
  
  filesToFix.forEach(fileName => {
    const filePath = path.join(modelsDir, fileName);
    if (fs.existsSync(filePath)) {
      fixUnionTypes(filePath);
    } else {
      console.log(`⚠️  File not found: ${fileName}`);
    }
  });
  
  const files = fs.readdirSync(modelsDir);
files.forEach(file => {
  if (file.endsWith('.ts')) {
    const filePath = path.join(modelsDir, file);
    fixAnyTypeImports(filePath);
  }
});
}

// Get the directory from command line argument
const tsDirectory = process.argv[2];

if (!tsDirectory) {
  console.error('Usage: node fix-ts-unions.js <typescript-output-directory>');
  process.exit(1);
}

console.log('🔧 Fixing TypeScript union types...');
processTypeScriptFiles(tsDirectory);
console.log('✨ Done!');