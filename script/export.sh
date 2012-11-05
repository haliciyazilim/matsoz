#!/bin/bash

mkdir tmp/export/assets

# cp -R app/assets/images/* tmp/export/assets/
# cp -R app/assets/javascripts/* tmp/export/assets/
# cp -R app/assets/stylesheets/* tmp/export/assets/

cp -R public/assets tmp/export/

find tmp/export/entries -name *.js -o -name *.css -o -name *.html | xargs sed -i.old 's/\/assets/..\/assets/g'
find tmp/export/entries -name *.old | xargs rm
find tmp/export/assets -name *.js -o -name *.css -o -name *.html | xargs sed -i.old 's/\/assets/..\/assets/g'
find tmp/export/assets -name *.old | xargs rm

rm tmp/export.tar.gz
cd tmp/export
tar cvzf ../export.tar.gz .
