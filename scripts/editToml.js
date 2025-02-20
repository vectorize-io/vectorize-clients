const fs = require('fs');
const path = require('path');
const toml = require('toml');
const tomlStringify = require('@iarna/toml');

// Read and parse the TOML file
function readToml(file) {
    try {
        const content = fs.readFileSync(file, 'utf-8');
        return toml.parse(content);
    } catch (error) {
        throw new Error('Error reading TOML file:', error);
    }
}

// Set a nested property safely
function setNestedProperty(obj, keys, value, isList) {
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
            current[keys[i]] = {};
        }
        current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = isList ? value.split(',').map(item => item.trim()) : value;
}


// Update a nested field, ensuring lists remain lists when specified
function updateTomlField(file, sectionPath, field, value, isList) {
    const data = readToml(file);
    const keys = sectionPath.split('.');

    setNestedProperty(data, [...keys, field], value, isList);
    const formattedToml = tomlStringify.stringify(data).trim() + '\n';

    try {
        fs.writeFileSync(file, formattedToml, 'utf-8');
        console.log(`Updated [${sectionPath}] ${field} to ${JSON.stringify(value)}`);
    } catch (error) {
        console.error('Error writing TOML file:', error);
    }
}

// Example usage: Update a nested field in the TOML file
const file = process.argv[2];
const section = process.argv[3];
const fieldToUpdate = process.argv[4];
const newValue = process.argv[5];
const isList = process.argv[6] === 'list'; // Pass 'list' as a flag to treat as a list

if (section && fieldToUpdate && newValue) {
    updateTomlField(file, section, fieldToUpdate, newValue, isList);
} else {
    throw new Error('Usage: node editToml.js <section> <field> <value> [list]');
}