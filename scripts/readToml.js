const fs = require('fs');
const toml = require('toml');
const path = require('path');

// Read and parse the TOML file
function readToml(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8').trim();
        return toml.parse(content);
    } catch (error) {
        throw new Error(`Failed to read or parse the TOML file: ${error.message}`);
    }
}

// Retrieve a nested field from the TOML file
function getTomlField(filePath, sectionPath, field) {
    const data = readToml(filePath);
    if (!data) throw new Error('Failed to read TOML file.');

    const keys = sectionPath.split('.');
    let current = data;

    for (const key of keys) {
        if (!(key in current)) {
            throw new Error(`Section "${key}" not found in section [${sectionPath}].`);
        }
        current = current[key];
    }

    if (!(field in current)) {
        throw new Error(`Field "${field}" not found in section [${sectionPath}].`);
    }
    console.log(current[field]);

}

// Example usage: Read a nested field from the TOML file
const filePath = process.argv[2];
const sectionPath = process.argv[3];
const fieldToRead = process.argv[4];

if (filePath && sectionPath && fieldToRead) {
    getTomlField(filePath, sectionPath, fieldToRead);
} else {
    throw new Error('Usage: node readToml.js <file-path> <section-path> <field>');
}