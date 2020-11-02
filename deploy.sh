#!/bin/bash
# Credit to https://brianchildress.co/named-parameters-in-bash/
message=${m:-Publcishing website}

while [ $# -gt 0 ]; do

   if [[ $1 == *"--"* ]]; then
        param="${1/--/}"
        declare $param="$2"
        # echo $1 $2 // Optional to see the parameter:value result
   fi

  shift
done

echo "Message"
echo $message

cd dist
git add *
git commit -m "$message"
git push origin website
