#!/bin/bash

# This script traverses all .js files in the current directory and its subdirectories,
# imports them using Node.js, stringifies their exports to JSON,
# and saves the output to a .json file with the same path and base name.

# --- Prerequisites ---
# 1. Node.js must be installed on your system.
# 2. Your JavaScript files should be valid ES modules or CommonJS modules.
#    For ES modules (.js files), you might need "type": "module" in your package.json,
#    or use the .mjs extension for explicit ES module recognition.

echo "--- Starting .js to .json Conversion (Including Nested Directories) ---"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed."
    echo "Please install Node.js to run this script (e.g., from nodejs.org)."
    exit 1
fi

# Find all JavaScript files in the current directory and its subdirectories.
# The '-maxdepth 1' option has been removed to allow traversal into nested directories.
# 'while IFS= read -r js_file' handles filenames with spaces correctly.
find . -name "*.js" | while IFS= read -r js_file; do
    # Skip the script itself if it happens to be named with a .js extension
    # and is in the current directory.
    if [[ "$(basename "$0")" == "$(basename "${js_file}")" ]]; then
        echo "Skipping script file: ${js_file}"
        continue
    fi

    # Extract the base name (filename without path or extension)
    base_name=$(basename "${js_file}" .js)

    # Skip index.js files as requested.
    if [[ "${base_name}" == "index" ]]; then
        echo "Skipping 'index.js' as requested: ${js_file}"
        continue
    fi

    # Define the output JSON file path.
    # We construct the JSON file path by replacing the .js extension with .json.
    # This ensures the .json file is created in the same directory as the .js file.
    json_file="${js_file%.js}.json"

    echo "Processing '${js_file}' -> '${json_file}'"

    # Construct the Node.js command:
    # 1. 'import("${js_file}")': Dynamically imports the JavaScript file.
    #    The 'module' object will contain all named exports and a 'default' property
    #    for the default export (or module.exports for CommonJS).
    # 2. '.then(module => console.log(JSON.stringify(module)))':
    #    Once the module is loaded, stringify the entire 'module' object to JSON
    #    and print it to standard output.
    # 3. '.catch(err => { ... })': Basic error handling to catch issues during import.
    #    It prints the error and exits Node.js with a non-zero code if an error occurs.
    node_command="import('${js_file}').then(module => console.log(JSON.stringify(module.default || {}, null, 2))) \
                 .catch(err => { console.error(\"Error processing ${js_file}:\", err); process.exit(1); });"

    # Execute the Node.js command and redirect its standard output to the .json file.
    # 'if' statement checks the exit code of the 'node' command.
    if node -e "${node_command}" > "${json_file}"; then
        echo "   Success: '${json_file}' created."
    else
        echo "   Failed: Could not convert '${js_file}'."
        echo "   Please check the Node.js output above for details."
        # Remove the potentially incomplete or erroneous JSON file
        rm -f "${json_file}"
    fi
done

echo "--- Conversion Process Complete ---"
