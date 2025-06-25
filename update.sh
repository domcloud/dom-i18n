#!/bin/bash

# --- Configuration ---
SOURCE_LANG_DIR="en" # The directory containing the source/default YAML files (e.g., 'en/')

# --- Pre-requisite Check: yq ---
# This script requires 'yq' (mikefarah/yq) for YAML processing.
# If you don't have it, install it from: https://github.com/mikefarah/yq#install
# Check if yq is installed and is the correct version
if ! command -v yq &> /dev/null || [[ "$(yq --version 2>&1)" != *"mikefarah"* ]]; then
    echo "Error: 'yq' (mikefarah/yq) is not installed or not the correct version."
    echo "Please install it: https://github.com/mikefarah/yq#install"
    exit 1
fi

echo "--- Starting YAML File Merge Process (Multi-Language Target) ---"
echo "Source directory for default files: '$SOURCE_LANG_DIR/'"
echo "-----------------------------------------------------"

# Get a list of all top-level directories that are *not* the SOURCE_LANG_DIR
# This assumes your other language directories (e.g., 'fr', 'es') are direct children of the current directory.
# We exclude the source directory itself to prevent self-merging.
TARGET_LANG_DIRS=()
for d in */; do
    # Remove trailing slash and check if it's not the source directory
    dir_name="${d%/}"
    if [[ "$dir_name" != "$SOURCE_LANG_DIR" ]]; then
        TARGET_LANG_DIRS+=("$dir_name")
    fi
done

if [ ${#TARGET_LANG_DIRS[@]} -eq 0 ]; then
    echo "No target language directories found (e.g., 'fr/', 'es/') to merge into."
    echo "Please create sibling directories to '$SOURCE_LANG_DIR/' for other languages."
    echo "--- YAML File Merge Process Completed (No targets) ---"
    exit 0
fi

echo "Target language directories detected: ${TARGET_LANG_DIRS[@]}"
echo "-----------------------------------------------------"

# Find all .yaml files recursively within the SOURCE_LANG_DIR.
# -print0 and read -d $'\0' are used for safe handling of filenames with spaces or special characters.
find "$SOURCE_LANG_DIR" -name "*.yaml" -print0 | while IFS= read -r -d $'\0' source_file; do
    # 1. Determine the relative path (e.g., 'messages/app.yaml' from 'en/messages/app.yaml')
    relative_path="${source_file#"$SOURCE_LANG_DIR/"}"

    echo "Processing source file: '$source_file'"

    # 2. Iterate through each target language directory
    for target_lang_dir in "${TARGET_LANG_DIRS[@]}"; do
        target_file="$target_lang_dir/$relative_path"

        echo "  --> Merging into language: '$target_lang_dir'"
        echo "    Target file: '$target_file'"

        # Create the target directory if it doesn't exist
        target_dir=$(dirname "$target_file")
        if [[ ! -d "$target_dir" ]]; then
            echo "    Creating directory: '$target_dir'"
            mkdir -p "$target_dir"
        fi

        # Handle file existence: Merge or Copy
        if [[ -f "$target_file" ]]; then
            # If the target file exists, perform a merge operation.
            # 'select(fileIndex == 1)' refers to the second file provided to yq (which is $target_file).
            # 'select(fileIndex == 0)' refers to the first file provided to yq (which is $source_file).
            # The '*+' operator performs a deep merge of objects and concatenates arrays.
            # By putting '$target_file' (select(fileIndex == 1)) as the LHS of the '*+' operator,
            # its existing scalar values take precedence, and map structures are deeply merged,
            # while new keys and array elements from '$source_file' (select(fileIndex == 0)) are added.
            echo "    Merging '$source_file' into existing '$target_file'..."
            yq eval-all 'select(fileIndex == 0) *+ select(fileIndex == 1)' "$source_file" "$target_file" > "$target_file.tmp"
            if [[ $? -eq 0 ]]; then
                mv "$target_file.tmp" "$target_file"
                echo "    Successfully merged '$source_file' into '$target_file'."
            else
                echo "    Error merging '$source_file' with '$target_file'. Temporary file remains: $target_file.tmp"
                rm -f "$target_file.tmp" # Clean up temp file on error
            fi
        else
            # If the target file does not exist, simply copy the source file.
            echo "    Creating new file '$target_file' by copying '$source_file'..."
            cp "$source_file" "$target_file"
            echo "    Successfully created '$target_file'."
        fi
        echo "  -------------------------------------------------"
    done
    echo "-----------------------------------------------------"
done

echo "--- YAML File Merge Process Completed ---"
