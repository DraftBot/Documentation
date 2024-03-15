#!/bin/bash

base_ref=$1
current_branch=$(git rev-parse --abbrev-ref HEAD)
base_sha=$(git rev-parse origin/$base_ref)
diff_output=$(git diff --name-only "$base_sha" "$current_branch")

most_modified_file=""
max_modifications=0
for file in $diff_output; do
  modifications=$(git diff --numstat "$base_sha" "$current_branch" -- $file | awk '{print $1+$2}')
  if [ $modifications -gt $max_modifications ]; then
    max_modifications=$modifications
    most_modified_file=$file
  fi
done

echo "$most_modified_file" | sed -E 's/[0-9]+\.//g' | sed 's/\.md$//'