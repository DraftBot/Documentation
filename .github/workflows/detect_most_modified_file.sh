#!/bin/bash

current_branch=$(git rev-parse --abbrev-ref HEAD)
diff_output=$(git diff --name-only origin/main "$current_branch")
if [ -z "$diff_output" ]; then
  echo "Aucun fichier modifié trouvé dans le diff entre 'main' et la branche actuelle."
  exit 0
fi

most_modified_file=""
max_modifications=0
for file in $diff_output; do
  modifications=$(git diff --numstat origin/main "$current_branch" -- $file | awk '{print $1+$2}')
  if [ $modifications -gt $max_modifications ]; then
    max_modifications=$modifications
    most_modified_file=$file
  fi
done

echo "$most_modified_file" | sed -E 's/[0-9]+\.//g' | sed 's/\.md$//'