#!/bin/sh

# Credit to https://brianchildress.co/named-parameters-in-bash/

dist_folder=${d:-dist}
message=${m:-Publishing website}

while [ $# -gt 0 ]; do

   if [[ $1 == *"--"* ]]; then
        param="${1/--/}"
        declare $param="$2"
   fi

  shift
done

echo $dist_folder
echo $message

git add $dist_folder && git commit -m "$message"
git subtree push --prefix $1 origin gh-pages