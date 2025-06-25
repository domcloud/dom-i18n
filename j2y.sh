#!/bin/bash

# This script traverses all .json files in the current directory and its subdirectories,
# converts them to YAML, and saves the result to a .yaml file with the same path and base name.

# --- Prerequisites ---
# 1. 'yq' (version 4.x or later) must be installed for JSON to YAML conversion.
#    Installation instructions: https://mikefarah.gitbook.io/yq/#install
#    (e.g., `brew install yq` on macOS, `sudo snap install yq` on Ubuntu)

echo "--- Starting .json to .yaml Conversion (Including Nested Directories) ---"

# Check if yq is installed
if ! command -v yq &> /dev/null; then
    echo "Error: 'yq' is not installed or not in your PATH."
    echo "Please install 'yq' (version 4.x or later) to convert JSON to YAML."
    echo "See: https://mikefarah.gitbook.io/yq/#install"
    exit 1
fi

# Find all JSON files in the current directory and its subdirectories.
# 'while IFS= read -r json_file' handles filenames with spaces correctly.
find . -name "*.json" | while IFS= read -r json_file; do
    # Extract the base name (filename without path or extension)
    base_name=$(basename "${json_file}" .json)

    # Define the output YAML file path.
    # We construct the YAML file path by replacing the .json extension with .yaml.
    # This ensures the .yaml file is created in the same directory as the .json file.
    yaml_file="${json_file%.json}.yaml"

   # Skip index.js files as requested.
    if [[ "${base_name}" == "package" ]]; then
        echo "Skipping 'package.json' as requested: ${js_file}"
        continue
    fi
    echo "Processing '${json_file}' -> '${yaml_file}'"

    # Convert the JSON file to YAML using 'yq -P' (pretty print JSON as YAML)
    # The 'if' statement checks the exit code of the 'yq' command.
    if yq -Poy "${json_file}" > "${yaml_file}"; then
        yq '... |= (select(tag == "!!str") | sub(" *\n *", "\n"))' -i "${yaml_file}"
        yq '(.. | select(tag == "!!str" and test("\n"))) style="literal"' -i "${yaml_file}"
        # yq e '.. style="literal"' -i "${yaml_file}"
        echo "   Success: '${yaml_file}' created."
    else
        echo "   Failed: Could not convert '${json_file}' to YAML."
        echo "   Please check the 'yq' output above for details."
        # Remove the potentially incomplete or erroneous YAML file
        rm -f "${yaml_file}"
    fi
done

echo "--- Conversion Process Complete ---"
