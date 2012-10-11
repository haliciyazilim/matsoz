#!/bin/bash

mkdir tmp/export/assets

# cp -R app/assets/images/* tmp/export/assets/
# cp -R app/assets/javascripts/* tmp/export/assets/
# cp -R app/assets/stylesheets/* tmp/export/assets/

cp -R public/assets tmp/export/assets

find tmp/export -name *.js -o -name *.css -o -name *.html | xargs sed -i.old 's/\/assets/..\/assets/g'
find tmp/export -name *.old | xargs rm

rm tmp/export.tar.gz
tar cvzf tmp/export.tar.gz tmp/export/
