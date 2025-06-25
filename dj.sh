#!/bin/bash

# This script deletes all .js and .json files in the current directory
# and its subdirectories.

echo "--- Starting File Deletion ---"

# Prompt for confirmation before proceeding
read -p "Are you sure you want to delete ALL .js and .json files in the current directory and its subdirectories? (y/N): " -n 1 -r
echo    # (optional) move to a new line

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Proceeding with deletion..."

    # Find and delete all .js files
    echo "Deleting .js files..."
    find . -name "*.js" -type f -print -delete

    # Find and delete all .json files
    echo "Deleting .json files..."
    find . -name "*.json" -type f -print -delete

    echo "--- File Deletion Complete ---"
else
    echo "Deletion cancelled."
fi