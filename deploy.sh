#!/bin/sh
if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi
echo $2
git add dist && git commit -m $2
git subtree push --prefix $1 origin gh-pages